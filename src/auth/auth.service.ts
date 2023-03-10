import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOneByUser(username);
        if (!!user && bcrypt.compare(password, user.password)) {
            const { password, ...rest } = user;
            return rest;
        }
        return null
    }

    async login(user: any) {
        const payload = { name: user?.username, email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign({ ...payload })
        }
    }
}
