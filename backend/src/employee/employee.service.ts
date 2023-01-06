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

  getEmployeeByNic(contactNo: string): Promise<Employee> {
    try {
      return this.employeeRepository.findOne({
        where: { contactNo: contactNo },
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
