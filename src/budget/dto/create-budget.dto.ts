import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDefined, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateBudgetDto {
    @ApiProperty({required: true})
    @IsString()
    @IsNotEmpty()
    title: string;
    @ApiProperty({required: true})
    @IsNotEmpty()
    @Min(1)
    amount: number;
    @ApiProperty()
    @IsDate()
    @IsOptional()
    date: Date;
    @ApiProperty()
    @IsString()
    @IsOptional()
    remarks: string;
}
