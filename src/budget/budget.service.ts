import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExpenseCategory } from 'src/expense-category/entities/expense-category.entity';
import { User } from 'src/user/entities/User.entity';
import { CreateBudgetParams, UpdateBudgetParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { Budget } from './entities/budget.entity';

@Injectable()
export class BudgetService {

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Budget) private budgetRepository: Repository<Budget>,
    @InjectRepository(ExpenseCategory) private exCategoryRepository: Repository<ExpenseCategory>,
  ) { }

  async create(userId: number, eCatId: number, budgetDetails: CreateBudgetParams) {
    const user = await this.userRepository.findOneBy({ id: userId });

    if (!user)
      throw new HttpException('User not found. Cannot create budget.', HttpStatus.BAD_REQUEST);

    const expenseCategory = await this.exCategoryRepository.findOneBy({ id: eCatId });

    if (!expenseCategory)
      throw new HttpException('Category not found. Cannot create budget.', HttpStatus.BAD_REQUEST);

    const newBudget = this.budgetRepository.create({ ...budgetDetails, expenseCategory, user });
    return this.budgetRepository.save(newBudget);
  }

  getAllBudgets() {
    return this.budgetRepository.find();
  }

  findOne(id: number) {
    return this.budgetRepository.findOne({
      where: {
        id: id,
      },
      relations: ['expenseCategory']
    });
  }

  update(id: number, userBudget: UpdateBudgetParams) {
    return this.budgetRepository.update({ id }, { ...userBudget });

  }

  remove(id: number) {
    return this.budgetRepository.delete({ id });
  }
}
