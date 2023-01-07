import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { Employee } from './entity/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async createEmployee(employee: EmployeeCreateDTO): Promise<Employee> {
    try {
      const empEn = this.employeeRepository.create(employee);
      return this.employeeRepository.save(empEn);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async employeeRetention(): Promise<Object> {
    try {
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async employeeLeavesUpdate(id: string): Promise<Employee> {
    try {
      const employee = await this.employeeRepository.findOne({
        where: { id: id },
      });
      employee.getLeaves = employee.getLeaves + 1;

      return this.employeeRepository.save(employee);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateEmployee(employee: EmployeeCreateDTO): Promise<Object> {
    try {
      return new Promise((resolve, reject) => {
        const empEn = this.employeeRepository.create(employee);
        resolve({
          message: 'success',
          status: HttpStatus.OK,
          data: this.employeeRepository.save(empEn),
        });
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getAllEmployees(): Promise<Employee[]> {
    try {
      return this.employeeRepository.find();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAllEmployeesThatRetireInNextYear(): Promise<Object> {
    try {
      let count = 0;
      await (
        await this.employeeRepository.find()
      ).map((each) => {
        var today = new Date();
        var birthDate = new Date(each.dob);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        if (age >= 54) {
          count++;
        }
      });
      return {
        count: count,
        presentage:
          (count / (await (await this.employeeRepository.find()).length)) * 100,
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAllEmployeesThatRetireInNextYears(): Promise<string> {
    try {
      let retenChart = {};
      await (
        await this.employeeRepository.find()
      ).map((each) => {
        var today = new Date();
        var birthDate = new Date(each.dob);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        const year = new Date().getFullYear();
        retenChart[year] = age;
      });
      return JSON.stringify(retenChart ? retenChart : '');
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getEmployeeById(id: string): Promise<Employee> {
    try {
      return this.employeeRepository.findOne({
        where: { id: id },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getEmployeeByNic(nic: string): Promise<Employee> {
    try {
      return this.employeeRepository.findOne({
        where: { nic: nic },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getEmployeeByContactNo(contactNo: string): Promise<Employee> {
    try {
      return this.employeeRepository.findOne({
        where: { contactNo: contactNo },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getEmployeeByEmail(email: string): Promise<Employee> {
    try {
      return this.employeeRepository.findOne({
        where: { email: email },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
