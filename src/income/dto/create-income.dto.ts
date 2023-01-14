import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateIncomeDto {
    @ApiProperty()
    @IsDateString()
    @IsNotEmpty()
    date: Date;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;
    @ApiProperty()
    @IsNotEmpty()
    @Min(1)
    amount: number;
    @ApiProperty()
    @IsString()
    @IsOptional()
    remarks: string;
}
