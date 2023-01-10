import { ApiProperty } from "@nestjs/swagger";

export class UpdateBudgetDto {
    @ApiProperty()
    title: string;
    @ApiProperty()
    date: Date;
    @ApiProperty()
    amount: number;
    @ApiProperty()
    remarks: string;
}
