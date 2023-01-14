import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class UpdateExpenseDto {
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
