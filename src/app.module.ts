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
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: parseInt(process.env.DATABASE_PORT, 10) || 3606,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
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
