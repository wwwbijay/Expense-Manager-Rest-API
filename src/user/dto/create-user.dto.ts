import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty({
        message: 'username not be empty',
        context: {
          errorCode: 1003,
          developerNote: 'The validated string cannot be empty.',
        },
      })
    @MinLength(3, {
        message: 'min length of username is 3',
        context: {
          errorCode: 1003,
          developerNote: 'The min length of username is 3.',
        },
      })
    @MaxLength(65, {
        message: 'min length of username is 3',
        context: {
          errorCode: 1003,
          developerNote: 'The min length of username is 3.',
        },
      })
    username: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(65)
    password: string;
}
