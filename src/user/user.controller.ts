import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { Put, Query, UseGuards } from '@nestjs/common/decorators';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from '@nestjs/passport';


@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  // @Post('/signup')
  // async create(@Body() createUserDto: CreateUserDto) {
  //   const saltOrRounds = 10;
  //   const hashedPassword = await bcrypt.hash(createUserDto.password, saltOrRounds);
  //   createUserDto.password = hashedPassword;
  //   return this.userService.create(createUserDto);
  // }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.removeUser(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create-user-profile')
  createUserProfile(
    @Query('userId', ParseIntPipe) userId: number,
    @Body() createUserProfileDto: CreateUserProfileDto
  ) {
    return this.userService.createUserProfile(userId, createUserProfileDto);
  }

}
