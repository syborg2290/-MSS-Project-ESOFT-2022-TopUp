import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeService } from '../employee/employee.service';
import { Repository } from 'typeorm';
import { UserCreateDTO } from './dto/create-user.input';
import { User } from './entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @Inject(EmployeeService)
    private readonly employeeService: EmployeeService,
    private jwtService: JwtService,
  ) {}

  authenticateUser(username, password): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const user = this.userRepository.findOne({
        where: { username: username },
      });
      if (user) {
        const isMatch = await bcrypt.compare(password, (await user).password);
        if (isMatch) {
          const token = this.jwtService.sign({ id: (await user).id });
          resolve({
            message: 'success',
            status: HttpStatus.OK,
            data: { token },
          });
        } else {
          reject({
            message: 'Wrong password!',
            status: HttpStatus.BAD_REQUEST,
            data: null,
          });
        }
      } else {
        reject({
          message: "User doesn't exist!",
          status: HttpStatus.BAD_REQUEST,
          data: null,
        });
      }
    });
  }

  async createUser(user: UserCreateDTO): Promise<Object> {
    try {
      return new Promise(async (resolve, reject) => {
        const isUserAleradyExists = this.getUserByEmail(user.email);
        if (isUserAleradyExists !== null) {
          const employee = await this.employeeService.getEmployeeById(
            user.emaployeeId,
          );
          if (employee) {
            const saltOrRounds = 10;
            const hashedPassword = await bcrypt.hash(
              user.password,
              saltOrRounds,
            );
            const userDbObj = {
              id: user.id,
              username: user.username,
              email: user.email,
              password: hashedPassword,
              emaployee: employee,
            };
            const userEn = this.userRepository.create(userDbObj);
            resolve({
              message: 'success',
              status: HttpStatus.OK,
              data: this.userRepository.save(userEn),
            });
          }
        } else {
          reject({
            message: 'Email already used!',
            status: HttpStatus.BAD_REQUEST,
            data: null,
          });
        }
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getUserById(id: string): Promise<User> {
    try {
      return this.userRepository.findOne({
        where: { id: id },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getUserByEmail(email: string): Promise<User> {
    try {
      return this.userRepository.findOne({
        where: { email: email },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getUserByUsername(username: string): Promise<User> {
    try {
      return this.userRepository.findOne({
        where: { username: username },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
