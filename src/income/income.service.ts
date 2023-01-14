import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExpenseCategory } from 'src/expense-category/entities/expense-category.entity';
import { User } from 'src/user/entities/User.entity';
import { Repository } from 'typeorm';
import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { Income } from './entities/income.entity';

@Injectable()
export class IncomeService {

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Income) private incomeRepository: Repository<Income>,
    @InjectRepository(ExpenseCategory) private exCategoryRepository: Repository<ExpenseCategory>,
  ) { }

  async create(userId: number, inCatId: number, incomeDetails: CreateIncomeDto) {
    const user = await this.userRepository.findOneBy({ id: userId });

    if (!user)
      throw new HttpException('User not found. Cannot create expense.', HttpStatus.BAD_REQUEST);

    const incomeCategory = await this.exCategoryRepository.findOneBy({ id: inCatId });

    if (!incomeCategory)
      throw new HttpException('Category not found. Cannot create expense.', HttpStatus.BAD_REQUEST);

    const newIncome = this.incomeRepository.create({ ...incomeDetails, incomeCategory, user });
    return this.incomeRepository.save(newIncome);
  }

  findAll() {
    return this.incomeRepository.find();
  }

  findOne(id: number) {
    return this.incomeRepository.findOne({
      where: {
        id: id,
      },
      relations: ['incomeCategory']
    });
  }

  update(id: number, incomeDetails: UpdateIncomeDto) {
    return this.incomeRepository.update({ id }, { ...incomeDetails });
  }

  remove(id: number) {
    return this.incomeRepository.delete({ id });
  }
}
