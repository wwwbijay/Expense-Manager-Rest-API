import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDefined, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateBudgetDto {
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
