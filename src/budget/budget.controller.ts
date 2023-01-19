import { Controller, Request, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { BudgetService } from './budget.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';

@ApiTags('Budget')
@Controller('budget')
export class BudgetController {

  constructor(private readonly budgetService: BudgetService) { }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(
    @Query('expenseCategoryId', ParseIntPipe) eCatId: number,
    @Body() createBudgetDto: CreateBudgetDto,
    @Request() req
  ) {
    console.log(req.user);
    return this.budgetService.create(req.user.id, eCatId, createBudgetDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.budgetService.getAllBudgets();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.budgetService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBudgetDto: UpdateBudgetDto) {
    return this.budgetService.update(+id, updateBudgetDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetService.remove(+id);
  }

}
