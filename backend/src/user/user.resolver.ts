import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';
import {
  UnauthorizedException,
  UseFilters,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/helper/exception.filter';
import { User } from './entity/user.entity';
import { UserService } from './user.service';
import { UserCreateDTO } from './dto/create-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User], { name: 'createUser' })
  @UseFilters(new HttpExceptionFilter())
  createUser(@Args('user') user: UserCreateDTO, @Context() context) {
    return this.userService.createUser(user);
  }
}
