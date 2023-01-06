import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { User } from './entity/user.entity';
import { UserService } from './user.service';
import { UserCreateDTO } from './dto/create-user.input';
import { UserGetDTO } from './dto/get-user.dto';
import { TokenGetDTO } from './dto/sign-user.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => User, { name: 'createUser' })
  @UseFilters(new HttpExceptionFilter())
  async createUser(
    @Args('id') id: string,
    @Args('username') username: string,
    @Args('password') password: string,
    @Args('employeeId') nic: string,
    @Args('role') role: string,
    @Context() context,
  ): Promise<User> {
    return new Promise(async (resolve, reject) => {
      const user = new UserCreateDTO();
      user.id = id;
      user.password = password;
      user.role = role;
      user.username = username;
      user.employeeId = nic;

      resolve(await this.userService.createUser(user));
    }).then(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      },
    );
  }

  @Query(() => [UserGetDTO], { name: 'getAllUsers' })
  @UseFilters(new HttpExceptionFilter())
  async getAllUsers(@Args('test') test: string) {
    try {
      return (await this.userService.getAllUser()).map((item) => {
        const obj: UserGetDTO = {
          id: item.id,
          username: item.username,
          email: item.email,
          role: item.role,
          employee: item.employee,
        };
        return obj;
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Mutation(() => TokenGetDTO, { name: 'signIn' })
  @UseFilters(new HttpExceptionFilter())
  async signIn(
    @Args('username') username: string,
    @Args('password') password: string,
    @Context() context,
  ) {
    try {
      let result: TokenGetDTO;
      let user: any = await this.userService.authenticateUser(
        username,
        password,
      );
      if (user.token && user.status != HttpStatus.OK) {
        result = {
          status: user.status,
          message: user.message,
          token: user.token,
        };
      } else {
        result = {
          status: user.status,
          message: user.message,
          token: user.token,
        };
      }

      return result;
    } catch (error) {
      // console.log(error);
      return error;
    }
  }

  @Query(() => User, { name: 'getUserById' })
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

  @Query(() => User, { name: 'getUserByEmail' })
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
