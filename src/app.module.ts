import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IncomeModule } from './income/income.module';
import { ExpenseModule } from './expense/expense.module';
import { BudgetModule } from './budget/budget.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { IncomeCategoryModule } from './income-category/income-category.module';
import { ExpenseCategoryModule } from './expense-category/expense-category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_expense_manager',
      entities: [],
      synchronize: true,
    }),
    IncomeModule,
    ExpenseModule,
    BudgetModule,
    UserModule,
    IncomeCategoryModule,
    ExpenseCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
