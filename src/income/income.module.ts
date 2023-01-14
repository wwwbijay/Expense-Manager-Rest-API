import { Module } from '@nestjs/common';
import { IncomeService } from './income.service';
import { IncomeController } from './income.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Income } from './entities/income.entity';
import { User } from 'src/user/entities/User.entity';
import { ExpenseCategory } from 'src/expense-category/entities/expense-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Income, User, ExpenseCategory])],
  controllers: [IncomeController],
  providers: [IncomeService]
})
export class IncomeModule { }
