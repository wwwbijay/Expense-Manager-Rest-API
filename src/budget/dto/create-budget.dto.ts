import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDefined, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateBudgetDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;
    @ApiProperty()
    @IsDate()
    @IsOptional()
    date: Date;
    @ApiProperty()
    @IsNotEmpty()
    @Min(0)
    amount: number;
    @ApiProperty()
    @IsString()
    @IsOptional()
    remarks: string;
}
