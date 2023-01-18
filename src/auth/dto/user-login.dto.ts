import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class UserLoginDto {
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
