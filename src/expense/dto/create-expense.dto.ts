import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateExpenseDto {
    @ApiProperty()
    @IsDate()
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
