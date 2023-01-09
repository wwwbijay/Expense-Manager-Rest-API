import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { Budget } from './entities/budget.entity';

@Injectable()
export class BudgetService {

  constructor(
    @InjectRepository(Budget) private budgetRepository: Repository<Budget>,
  ) { }

  create(createBudgetDto: CreateBudgetDto) {
    return 'This action adds a new budget';
  }

  getAllBudgets() {
    return this.budgetRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} budget`;
  }

  update(id: number, updateBudgetDto: UpdateBudgetDto) {
    return `This action updates a #${id} budget`;
  }

  remove(id: number) {
    return `This action removes a #${id} budget`;
  }
}
