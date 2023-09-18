import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExpenseCategory } from 'src/expense-category/entities/expense-category.entity';
import { User } from 'src/user/entities/User.entity';
import { Repository } from 'typeorm';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './entities/expense.entity';

@Injectable()
export class ExpenseService {

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Expense) private expenseRepository: Repository<Expense>,
    @InjectRepository(ExpenseCategory) private exCategoryRepository: Repository<ExpenseCategory>,
  ) { }


  async create(userId: number, eCatId: number, expenseDetails: CreateExpenseDto) {
    const user = await this.userRepository.findOneBy({ id: userId });

    if (!user)
      throw new HttpException('User not found. Cannot add expense.', HttpStatus.BAD_REQUEST);

    const expenseCategory = await this.exCategoryRepository.findOneBy({ id: eCatId });

    if (!expenseCategory)
      throw new HttpException('Category not found. Cannot add expense.', HttpStatus.BAD_REQUEST);

    try {
      const newExpense = this.expenseRepository.create({ ...expenseDetails, expenseCategory, user });
      this.expenseRepository.save(newExpense);
      return {
        message: 'Expense Created Successfully',
      };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
    
  }

  findAll() {
    return this.expenseRepository.find();
  }

  findOne(id: number) {
    return this.expenseRepository.findOne({
      where: {
        id: id,
      },
      relations: ['expenseCategory']
    });
  }

  update(id: number, expenseDetails: UpdateExpenseDto) {
    return this.expenseRepository.update({ id }, { ...expenseDetails });
  }

  remove(id: number) {
    return this.expenseRepository.delete({ id });
  }
}
