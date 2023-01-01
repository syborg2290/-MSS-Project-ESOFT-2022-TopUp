import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/helper/exception.filter';
import { Employee } from './entity/employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeCreateDTO } from './dto/create-employee.input';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}

  @Mutation(() => [Employee], { name: 'createEmployee' })
  @UseFilters(new HttpExceptionFilter())
  async createEmployee(
    @Args('employee') employee: EmployeeCreateDTO,
    @Context() context,
  ) {
    try {
      let result: object = {};
      let empRe: any = await this.employeeService.createEmployee(employee);
      if (empRe.status != HttpStatus.OK) {
        result = {
          status: empRe.status,
        };
      } else {
        result = {
          status: empRe.status,
        };
      }

      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => [Employee], { name: 'getEmployeeById' })
  @UseFilters(new HttpExceptionFilter())
  async getEmployeeById(@Args('id') id: string) {
    try {
      const usedBy = await this.employeeService.getEmployeeById(id);
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => [Employee], { name: 'getEmployeeByEmail' })
  @UseFilters(new HttpExceptionFilter())
  async getEmployeeByEmail(@Args('email') email: string) {
    try {
      const usedBy = await this.employeeService.getEmployeeByEmail(email);
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => [Employee], { name: 'getUserByNic' })
  @UseFilters(new HttpExceptionFilter())
  async getUserByNic(@Args('nic') nic: string) {
    try {
      const usedBy = await this.employeeService.getEmployeeByNic(nic);
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => [Employee], { name: 'getUserByContactNo' })
  @UseFilters(new HttpExceptionFilter())
  async getUserByContactNo(@Args('conNo') conNo: string) {
    try {
      const usedBy = await this.employeeService.getEmployeeByContactNo(conNo);
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
