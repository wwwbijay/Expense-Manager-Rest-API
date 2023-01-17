import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {
    @ApiProperty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;
    @ApiProperty()
    @IsEmail()
    @IsDefined()
    email: string;
    @ApiProperty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    password: string;
}
