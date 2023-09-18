import { ConflictException, ForbiddenException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { CreateUserParams } from 'src/utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/User.entity';
import { Repository } from 'typeorm';
import { RefreshToken } from './entities/refresh-token.entity';
import { sign, verify } from 'jsonwebtoken';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        @InjectRepository(User) private userRepository: Repository<User>,
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOneByUser(username);
        if (!!user && bcrypt.compare(password, user.password)) {
            const { password, ...rest } = user;
            return rest;
        }
        return null
    }

    async login(loginDetails: any, values: { userAgent: string; ipAddress: string }): Promise<{ accessToken: string; refreshToken: string } | undefined> {
        // need to import userService

        let user = await this.validateUser(loginDetails.username, loginDetails.password);
        if (!user) {
            throw new ForbiddenException('Access Denied');
        }
        return this.newRefreshAndAccessToken(loginDetails, values);

        // const payload = { name: user?.username, email: user.email, sub: user.id };
        // return {
        //     access_token: this.jwtService.sign({ ...payload })
        // }
    }
    async register(userDetails: CreateUserParams) {
        if (
            (await this.userRepository.findOneBy({ username: userDetails.username }))
        ) {
            return new ConflictException('User already exist');
        }

        const newUser = this.userRepository.create({ ...userDetails });
        const { password, ...result } = await this.userRepository.save(newUser);
        return {
            message: 'User created.',
            data: result
        };

    }

    newRefreshAndAccessToken(user: User, values: { userAgent: string; ipAddress: string; }) {
        const refreshObject = new RefreshToken({
            userId: user.id,
            email: user.email,
            ...values,

        });

        return {
            // sign is imported from jsonwebtoken like import { sign, verify } from 'jsonwebtoken';
            accessToken: sign(
                {
                    userId: user.id,
                },
                process.env.ACCESS_SECRET,
                {
                    expiresIn: process.env.JWT_EXPIRATION_TIME,
                },
            ),
            refreshToken: refreshObject.sign(),


        };
    }


    async refresh(refreshStr: string) {

        try {
            const refreshToken = verify(refreshStr, process.env.REFRESH_SECRET);

            if (typeof refreshToken == 'string') return undefined
            const user = await this.userService.findOne(refreshToken.userId);
            if (!user) {
                return undefined;
            }

            const accessToken = {
                userId: refreshToken.userId,
            };

            // sign is imported from jsonwebtoken like import { sign, verify } from 'jsonwebtoken';
            return {
                accessToken: sign(accessToken, process.env.ACCESS_SECRET, { expiresIn: process.env.JWT_EXPIRATION_TIME })
            };

        } catch (err) {
            return new HttpException({ err }, HttpStatus.BAD_REQUEST)
        }

    }
}
