import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateIncomeCategoryParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { IncomeCategory } from './entities/income-category.entity';

@Injectable()
export class IncomeCategoryService {

  constructor(
    @InjectRepository(IncomeCategory) private inCategoryRepository: Repository<IncomeCategory>,
  ) { }

  async create(categoryDetails: UpdateIncomeCategoryParams) {
    if (
      (await this.inCategoryRepository.findOneBy({ ...categoryDetails }))
    ) {
      return new ConflictException('Income category already exist.');
    }

    const newCategory = this.inCategoryRepository.create({ ...categoryDetails });
    return this.inCategoryRepository.save(newCategory);
  }

  findAll() {
    return this.inCategoryRepository.find();
  }

  findOne(id: number) {
    return this.inCategoryRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, categoryDetails: UpdateIncomeCategoryParams) {
    return this.inCategoryRepository.update({ id }, { ...categoryDetails });
  }
  remove(id: number) {
    return this.inCategoryRepository.delete({ id });
  }
}
