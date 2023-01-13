import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class UpdateBudgetDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    title: string;
    @ApiProperty()
    @IsDate()
    @IsOptional()
    date: Date;
    @ApiProperty()
    @Min(0)
    @IsOptional()
    amount: number;
    @ApiProperty()
    @IsString()
    @IsOptional()
    remarks: string;
}
