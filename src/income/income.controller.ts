import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { IncomeService } from './income.service';
import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Income')
@Controller('income')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) { }

  @Post()
  create(
    @Query('userId', ParseIntPipe) id: number,
    @Query('incomeCategoryId', ParseIntPipe) inCatId: number,
    @Body() createIncomeDto: CreateIncomeDto
  ) {
    return this.incomeService.create(id, inCatId, createIncomeDto);
  }

  @Get()
  findAll() {
    return this.incomeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incomeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIncomeDto: UpdateIncomeDto) {
    return this.incomeService.update(+id, updateIncomeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incomeService.remove(+id);
  }
}
