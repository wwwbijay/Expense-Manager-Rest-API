import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDefined, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateExpenseCategoryDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    description: string;
}
