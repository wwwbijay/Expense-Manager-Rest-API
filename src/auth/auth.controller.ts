import { Controller, Get, Post, Request,  UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JWTAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req):any{
        return this.authService.login(req.user);
    }

    @UseGuards(JWTAuthGuard)
    @Get('protected')
    getHello(@Request() req){
        return req.user;
    }
    
}
