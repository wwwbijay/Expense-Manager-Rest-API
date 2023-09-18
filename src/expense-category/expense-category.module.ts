import { Module } from '@nestjs/common';
import { ExpenseCategoryService } from './expense-category.service';
import { ExpenseCategoryController } from './expense-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseCategory } from './entities/expense-category.entity';
import { JWTStrategy } from 'src/auth/jwt.strategy';
import { User } from 'src/user/entities/User.entity';
import { Profile } from 'src/user/entities/profile.entity';
import { UserService } from 'src/user/user.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([ExpenseCategory, User, Profile])],
  controllers: [ExpenseCategoryController],
  providers: [ExpenseCategoryService, JWTStrategy, UserService]
})
export class ExpenseCategoryModule { }
