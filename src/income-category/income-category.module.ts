import { Module } from '@nestjs/common';
import { IncomeCategoryService } from './income-category.service';
import { IncomeCategoryController } from './income-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomeCategory } from './entities/income-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IncomeCategory])],
  controllers: [IncomeCategoryController],
  providers: [IncomeCategoryService]
})
export class IncomeCategoryModule { }
