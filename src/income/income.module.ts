import { Module } from '@nestjs/common';
import { IncomeService } from './income.service';
import { IncomeController } from './income.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Income } from './entities/income.entity';
import { User } from 'src/user/entities/User.entity';
import { ExpenseCategory } from 'src/expense-category/entities/expense-category.entity';
import { JWTStrategy } from 'src/auth/jwt.strategy';
import { AuthModule } from 'src/auth/auth.module';
import { UserService } from 'src/user/user.service';
import { Profile } from 'src/user/entities/profile.entity';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Income, User, ExpenseCategory, Profile])],
  controllers: [IncomeController],
  providers: [IncomeService, JWTStrategy, UserService]
})
export class IncomeModule { }
