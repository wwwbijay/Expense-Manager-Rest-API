import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { IncomeCategoryService } from './income-category.service';
import { CreateIncomeCategoryDto } from './dto/create-income-category.dto';
import { UpdateIncomeCategoryDto } from './dto/update-income-category.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Income Category')
@Controller('income-category')
export class IncomeCategoryController {
  constructor(private readonly incomeCategoryService: IncomeCategoryService) { }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createIncomeCategoryDto: CreateIncomeCategoryDto) {
    return this.incomeCategoryService.create(createIncomeCategoryDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.incomeCategoryService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incomeCategoryService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIncomeCategoryDto: UpdateIncomeCategoryDto) {
    return this.incomeCategoryService.update(+id, updateIncomeCategoryDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incomeCategoryService.remove(+id);
  }
}
