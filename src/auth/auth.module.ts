import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport/dist';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/User.entity';
import { UserService } from 'src/user/user.service';
import { Profile } from 'src/user/entities/profile.entity';
import { JwtModule } from '@nestjs/jwt/dist';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JWTStrategy } from './jwt.strategy';
import { AuthValidationMiddleware } from './middleware/authValidationMiddleware';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    PassportModule,
    TypeOrmModule.forFeature([User, Profile]),
    JwtModule.register({
      secret: process.env.JWT_ACCESS_SECRET,
      signOptions: { expiresIn: '60s' },
    })
  ],
  providers: [AuthService, LocalStrategy, UserService, JWTStrategy, ConfigService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthValidationMiddleware)
      .forRoutes({ path: 'auth/login', method: RequestMethod.POST });
  }
}