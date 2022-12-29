import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/helper/exception.filter';
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
      if (userRe) {
        result = {
          status: HttpStatus.OK,
        };
      } else {
        result = {
          status: HttpStatus.BAD_REQUEST,
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
    @Args('email') email: string,
    @Args('password') password: string,
    @Context() context,
  ) {
    try {
      let result: object = {};
      let user: any = await this.userService.authenticateUser({
        email,
        password,
      });
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
}
