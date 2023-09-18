import { Body, Controller, Get, Ip, Post, Req, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserLoginDto } from './dto/user-login.dto';
import { JWTAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import RefreshTokenDto from './dto/refresh-token.dto';


@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto): Promise<any> {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(createUserDto.password, saltOrRounds);
        createUserDto.password = hashedPassword;
        return this.authService.register(createUserDto);
    }

    @Post('login')
    async login(@Req() request: Request, @Ip() ip: string, @Body() body: UserLoginDto) {
        console.log(request);
        // geting the useragent and ip address from @Req decorator and @Ip decorater imported at the top.

        console.log({
            ipAddress: ip,
            userAgent: request.headers['user-agent']
        });

        return await this.authService.login(body, {
            ipAddress: ip,
            userAgent: request.headers['user-agent']
        });
    }

    @Post('refresh')
    // we need to create RefreshTokenDto
    async refreshToken(@Body() body: RefreshTokenDto) {
        return this.authService.refresh(body.refreshToken);
    }



}
