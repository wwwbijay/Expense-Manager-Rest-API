import { BadRequestException, ConflictException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';
import { User } from './entities/User.entity';
import { CreateUserParams, CreateUserProfileParams, UpdateUserParams } from '../utils/types';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>
  ) { }

  async create(userDetails: CreateUserParams) {
    if (
      (await this.userRepository.findOneBy({ username: userDetails.username }))
    ) {
      return new ConflictException('User already exist');
    }

    if (userDetails.username || userDetails.password) {

    }

    const newUser = this.userRepository.create({ ...userDetails });
    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find({ relations: ['profile'] });
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      where: {
        id: id,
      },
      relations: ['profile'],
    });
  }

  findOneByUser(username: string) {
    return this.userRepository.findOne({
      where: {
        username: username,
      }
    });
  }

  async updateUser(id: number, userDetails: UpdateUserParams) {
    const updatedUser = await this.userRepository.update({ id }, { ...userDetails });
    return updatedUser;
  }

  removeUser(id: number) {
    return this.userRepository.delete({ id });
  }

  async createUserProfile(id: number, profileDetails: CreateUserProfileParams) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user)
      throw new HttpException('User not found. Cannot create profile.', HttpStatus.BAD_REQUEST);
    const newProfile = this.profileRepository.create(profileDetails);
    const savedProfile = await this.profileRepository.save(newProfile);

    user.profile = savedProfile;
    return this.userRepository.save(user);
  }


}
