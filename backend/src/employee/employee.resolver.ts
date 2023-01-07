import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus, BadRequestException } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { Employee } from './entity/employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { EmployeeRetenCountGetDTO } from './dto/get-empRe2.dto';
import { EmployeeReten2GetDTO } from './dto/get-empRe.dto';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}

  @Mutation(() => Employee, { name: 'createEmployee' })
  @UseFilters(new HttpExceptionFilter())
  async createEmployee(
    @Args('id') id: string,
    @Args('nic') nic: string,
    @Args('firstName') firstName: string,
    @Args('middleName') middleName: string,
    @Args('lastName') lastName: string,
    @Args('nationality') nationality: string,
    @Args('email') email: string,
    @Args('gender') gender: string,
    @Args('dob') dob: string,
    @Args('previous_experience_years') previous_experience_years: number,
    @Args('dateOfJoining') dateOfJoining: string,
    @Args('terminatedDate') terminatedDate: string,
    @Args('deleted') deleted: boolean,
    @Args('contactNo') contactNo: string,
    @Args('leaves') leaves: number,
    @Args('getLeaves') getLeaves: number,
    @Args('department') department: string,
    @Args('position') position: string,
    @Args('salary') salary: number,
    @Args('emergencyContactNo') emergencyContactNo: string,
    @Args('address') address: string,
    @Context() context,
  ): Promise<Employee> {
    return new Promise(async (resolve, reject) => {
      const employee = new EmployeeCreateDTO();
      employee.id = id;
      employee.nic = nic;
      employee.firstName = firstName;
      employee.middleName = middleName;
      employee.lastName = lastName;
      employee.nationality = nationality;
      employee.email = email;
      employee.gender = gender;
      employee.dob = dob;
      employee.previous_experience_years = previous_experience_years;
      employee.dateOfJoining = dateOfJoining;
      employee.terminatedDate = terminatedDate;
      employee.deleted = deleted;
      employee.contactNo = contactNo;
      employee.leaves = leaves;
      employee.getLeaves = getLeaves;
      employee.department = department;
      employee.position = position;
      employee.salary = salary;
      employee.emergencyContactNo = emergencyContactNo;
      employee.address = address;
      const isEmployeeAlreadyExists =
        await this.employeeService.getEmployeeByEmail(employee.email);
      const isEmployeeContactNoAlreadyExists =
        await this.employeeService.getEmployeeByContactNo(employee.contactNo);
      if (isEmployeeAlreadyExists === null) {
        if (isEmployeeContactNoAlreadyExists === null) {
          resolve(await this.employeeService.createEmployee(employee));
        } else {
          reject(new BadRequestException('Contact No already used!'));
        }
      } else {
        reject(new BadRequestException('Email already used!'));
      }
    }).then(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      },
    );
  }

  @Mutation(() => Employee, { name: 'updateEmployee' })
  @UseFilters(new HttpExceptionFilter())
  async updateEmployee(
    @Args('employee') employee: EmployeeCreateDTO,
    @Context() context,
  ) {
    try {
      let result: object = {};
      let empRe: any = await this.employeeService.updateEmployee(employee);
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

  @Query(() => [Employee], { name: 'getAllEmployees' })
  @UseFilters(new HttpExceptionFilter())
  async getAllEmployees(@Args('test') test: string, @Context() context) {
    try {
      const usedBy = await this.employeeService.getAllEmployees();
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => EmployeeRetenCountGetDTO, {
    name: 'getAllEmployeesThatRetireInNextYear',
  })
  @UseFilters(new HttpExceptionFilter())
  async getAllEmployeesThatRetireInNextYear(
    @Args('test') test: string,
    @Context() context,
  ) {
    try {
      const usedBy =
        await this.employeeService.getAllEmployeesThatRetireInNextYear();
      const reObj = new EmployeeRetenCountGetDTO();
      reObj.count = usedBy['count'];
      reObj.presentage = usedBy['presentage'];
      return reObj;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => EmployeeReten2GetDTO, {
    name: 'getAllEmployeesThatRetireInNextYears',
  })
  @UseFilters(new HttpExceptionFilter())
  async getAllEmployeesThatRetireInNextYears(
    @Args('test') test: string,
    @Context() context,
  ) {
    try {
      const usedBy =
        await this.employeeService.getAllEmployeesThatRetireInNextYears();
      const reObj = new EmployeeReten2GetDTO();
      reObj.ret = usedBy;
      return reObj;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => Employee, { name: 'getEmployeeById' })
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

  @Query(() => Employee, { name: 'getEmployeeByEmail' })
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

  @Query(() => Employee, { name: 'getUserByNic' })
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

  @Query(() => Employee, { name: 'getUserByContactNo' })
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
