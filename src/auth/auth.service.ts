import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService
        ){}

    async validateUser(username: string, password: string):Promise<any>{
        const user = await this.userService.findOneByUser(username);
        if(!!user && user.password === password){
            const {password, username, ...rest} = user;
            return rest;
        }

        return null
    }
    
    async login(user: any){
        const payload = {name: user.username, email: user.email,  sub: user.id};
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
