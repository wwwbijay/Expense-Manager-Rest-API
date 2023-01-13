import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateIncomeCategoryDto } from './create-income-category.dto';

export class UpdateIncomeCategoryDto extends PartialType(CreateIncomeCategoryDto) {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    title: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    description: string;
}
