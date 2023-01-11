import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BudgetService } from './budget.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';

@ApiTags('Budget')
@Controller('budget')
export class BudgetController {
  
  constructor(private readonly budgetService: BudgetService) { }

  @Post()
  create(@Query('userId', ParseIntPipe) id: number, @Body() createBudgetDto: CreateBudgetDto) {
    return this.budgetService.create(id, createBudgetDto);
  }

  @Get()
  findAll() {
    return this.budgetService.getAllBudgets();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.budgetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBudgetDto: UpdateBudgetDto) {
    return this.budgetService.update(+id, updateBudgetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetService.remove(+id);
  }

}
