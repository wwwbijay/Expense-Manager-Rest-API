import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from "src/user/user.service";
import { AuthService } from "./auth.service";

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService, private userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'A651785272623255A34D1C7B83AE8'
        });
        console.log(process.env.JWT_SECRET);
    }

    async validate(payload: any) {
        const user = this.userService.findOne(payload.sub);

        return user;
    }
}