import {
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
} from 'amazon-cognito-identity-js';
import { Repository } from 'typeorm';
import { UserCreateDTO } from './dto/create-user.input';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  private userPool: CognitoUserPool;
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
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

  async createUser(user: UserCreateDTO): Promise<User> {
    try {
      let attributeList = [];

      return new Promise((resolve, reject) =>
        this.userPool.signUp(
          user.email,
          user.password,
          attributeList,
          null,
          (err, result) => {
            if (err) {
              reject(err);
            } else {
              const userEn = this.userRepository.create(user);
              resolve(this.userRepository.save(userEn));
            }
          },
        ),
      );
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
