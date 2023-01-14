import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './entities/expense.entity';
import { User } from 'src/user/entities/User.entity';
import { ExpenseCategory } from 'src/expense-category/entities/expense-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Expense, User, ExpenseCategory])],
  controllers: [ExpenseController],
  providers: [ExpenseService]
})
export class ExpenseModule { }
