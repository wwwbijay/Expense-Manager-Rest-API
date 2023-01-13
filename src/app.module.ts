import { Module } from '@nestjs/common';
import { IncomeModule } from './income/income.module';
import { ExpenseModule } from './expense/expense.module';
import { BudgetModule } from './budget/budget.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { IncomeCategoryModule } from './income-category/income-category.module';
import { ExpenseCategoryModule } from './expense-category/expense-category.module';
import { Budget } from './budget/entities/budget.entity';
import { Expense } from './expense/entities/expense.entity';
import { ExpenseCategory } from './expense-category/entities/expense-category.entity';
import { Income } from './income/entities/income.entity';
import { IncomeCategory } from './income-category/entities/income-category.entity';
import { User } from './user/entities/User.entity';
import { Profile } from './user/entities/profile.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_expense_manager',
      entities: [Budget, Expense, ExpenseCategory, Income, IncomeCategory, User, Profile],
      synchronize: true,
    }),
    IncomeModule,
    ExpenseModule,
    BudgetModule,
    UserModule,
    IncomeCategoryModule,
    ExpenseCategoryModule,
  ],
})
export class AppModule { }
