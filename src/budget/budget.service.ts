import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
  ) { }

  async create(userId: number, budgetDetails: CreateBudgetParams) {
    const user = await this.userRepository.findOneBy({ id: userId });

    if (!user)
      throw new HttpException('User not found. Cannot create post.', HttpStatus.BAD_REQUEST);

    const newBudget = this.budgetRepository.create({ ...budgetDetails, user });
    console.log(newBudget);
    
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
    });
  }

  update(id: number, userBudget: UpdateBudgetParams) {
    return this.budgetRepository.update({ id }, { ...userBudget });

  }

  remove(id: number) {
    return this.budgetRepository.delete({ id });
  }
}
