import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IncomeModule } from './income/income.module';
import { ExpenseModule } from './expense/expense.module';
import { BudgetModule } from './budget/budget.module';

@Module({
  imports: [IncomeModule, ExpenseModule, BudgetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
