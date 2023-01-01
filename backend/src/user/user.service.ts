import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
} from 'amazon-cognito-identity-js';
import { EmployeeService } from 'src/employee/employee.service';
import { Repository } from 'typeorm';
import { UserCreateDTO } from './dto/create-user.input';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  private userPool: CognitoUserPool;
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @Inject(EmployeeService)
    private readonly employeeService: EmployeeService,
  ) {
    this.userPool = new CognitoUserPool({
      UserPoolId: process.env.USERPOOLID,
      ClientId: process.env.CLIENTID,
    });
  }

  authenticateUser(user: { email: string; password: string }): Promise<any> {
    const { email, password } = user;
    let response: object = {};
    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });
    // userPoolId: "us-east-1_QTaUKaYU5"
    // clientId: "3h2qpceuqth127id0n8s85j63i"
    const userData = {
      Username: email,
      Pool: this.userPool,
    };

    const cognitoUser = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
      return cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          response = {
            status: HttpStatus.OK,
            message: 'Success',
            data: {
              user: result,
            },
          };
          resolve(result);
        },
        onFailure: (err) => {
          response = {
            status: HttpStatus.UNAUTHORIZED,
            data: {
              message: err.name,
              description: [err.message],
            },
          };
          resolve(response);
        },
      });
    });
  }

  async createUser(user: UserCreateDTO): Promise<Object> {
    try {
      let attributeList = [];

      return new Promise((resolve, reject) => {
        const isUserAleradyExists = this.getUserByEmail(user.email);
        if (isUserAleradyExists !== null) {
          this.userPool.signUp(
            user.email,
            user.password,
            attributeList,
            null,
            async (err, result) => {
              if (err) {
                reject({
                  message: err.message,
                  status: HttpStatus.BAD_REQUEST,
                  data: null,
                });
              } else {
                const employee = await this.employeeService.getEmployeeById(
                  user.emaployeeId,
                );
                if (employee) {
                  const userDbObj = {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    emaployee: employee,
                  };
                  const userEn = this.userRepository.create(userDbObj);
                  resolve({
                    message: 'success',
                    status: HttpStatus.OK,
                    data: this.userRepository.save(userEn),
                  });
                }
              }
            },
          );
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
