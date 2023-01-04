import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { User } from './entity/user.entity';
import { UserService } from './user.service';
import { UserCreateDTO } from './dto/create-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => [User], { name: 'createUser' })
  @UseFilters(new HttpExceptionFilter())
  async createUser(@Args('user') user: UserCreateDTO, @Context() context) {
    try {
      let result: object = {};
      let userRe: any = await this.userService.createUser(user);
      if (userRe.status != HttpStatus.OK) {
        result = {
          status: userRe.status,
        };
      } else {
        result = {
          status: userRe.status,
        };
      }

      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Mutation(() => [User], { name: 'signIn' })
  @UseFilters(new HttpExceptionFilter())
  async signIn(
    @Args('username') username: string,
    @Args('password') password: string,
    @Context() context,
  ) {
    try {
      let result: object = {};
      let user: any = await this.userService.authenticateUser(
        username,
        password,
      );
      if (user.data && user.data.status != HttpStatus.OK) {
        result = {
          status: user.data.status,
          data: user,
        };
      } else {
        result = {
          status: user.data.status,
          data: {
            user: user,
          },
        };
      }

      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => [User], { name: 'getUserById' })
  @UseFilters(new HttpExceptionFilter())
  async getUserById(@Args('id') id: string) {
    try {
      const usedBy = await this.userService.getUserById(id);
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => [User], { name: 'getUserByEmail' })
  @UseFilters(new HttpExceptionFilter())
  async getUserByEmail(@Args('email') email: string) {
    try {
      const usedBy = await this.userService.getUserByEmail(email);
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => [User], { name: 'getUserByUsername' })
  @UseFilters(new HttpExceptionFilter())
  async getUserByUsername(@Args('username') username: string) {
    try {
      const usedBy = await this.userService.getUserByUsername(username);
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
