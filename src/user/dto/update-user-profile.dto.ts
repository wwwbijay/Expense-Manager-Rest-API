import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserProfileDto {
    @ApiProperty()
    firstname: string;
    @ApiProperty()
    lastname: string;
    @ApiProperty()
    age: number
    @ApiProperty()
    dob: string;
}
