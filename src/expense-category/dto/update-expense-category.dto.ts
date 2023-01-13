import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateExpenseCategoryDto {
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
