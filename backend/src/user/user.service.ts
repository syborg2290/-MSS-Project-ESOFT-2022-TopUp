import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCreateDTO } from './dto/create-user.input';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(user: UserCreateDTO): Promise<User> {
    try {
      const userEn = this.userRepository.create(user);
      return this.userRepository.save(userEn);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
