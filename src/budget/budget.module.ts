import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budget } from './entities/budget.entity';
import { User } from 'src/user/entities/User.entity';
import { ExpenseCategory } from 'src/expense-category/entities/expense-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Budget, User, ExpenseCategory])],
  controllers: [BudgetController],
  providers: [BudgetService]
})
export class BudgetModule { }
