import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateExpenseDto {
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
function IsIsDateString() {
    throw new Error("Function not implemented.");
}

