import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;
    @ApiProperty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    password: string;
}
