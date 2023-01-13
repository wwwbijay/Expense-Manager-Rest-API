import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateExpenseCategoryParams, UpdateExpenseCategoryParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { ExpenseCategory } from './entities/expense-category.entity';

@Injectable()
export class ExpenseCategoryService {

  constructor(
    @InjectRepository(ExpenseCategory) private exCategoryRepository: Repository<ExpenseCategory>,
  ) { }
  async create(categoryDetails: CreateExpenseCategoryParams) {
    if (
      (await this.exCategoryRepository.findOneBy({ ...categoryDetails }))
    ) {
      return new ConflictException('Expense category already exist.');
    }

    const newCategory = this.exCategoryRepository.create({ ...categoryDetails });
    return this.exCategoryRepository.save(newCategory);
  }

  findAll() {
    return this.exCategoryRepository.find();
  }

  findOne(id: number) {
    return this.exCategoryRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, categoryDetails: UpdateExpenseCategoryParams) {
    return this.exCategoryRepository.update({ id }, { ...categoryDetails });
  }

  remove(id: number) {
    return this.exCategoryRepository.delete({ id });
  }
}
