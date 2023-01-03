import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UnitService } from '../unit/unit.service';
import { Repository } from 'typeorm';
import { Task } from './entity/task.entity';
import { TaskCreateDTO } from './dto/create-dto.input';
import { EmployeeService } from 'src/employee/employee.service';
import { PrototypeService } from 'src/prototype/prototype.service';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    @Inject(UnitService)
    private readonly unitService: UnitService,
    @Inject(EmployeeService)
    private readonly empService: EmployeeService,
    @Inject(PrototypeService)
    private readonly prototypeService: PrototypeService,
  ) {}

  async addTask(task: TaskCreateDTO): Promise<Object> {
    try {
      return new Promise(async (resolve, reject) => {
        const unit = await this.unitService.getUnitById(task.unit);
        const employee = await this.empService.getEmployeeById(task.employee);
        const prototype = await this.prototypeService.getPrototypeById(
          task.prototype,
        );
        if (unit && employee && prototype) {
          const taskDbObj = {
            id: task.id,
            title: task.title,
            avg_duration: task.avg_duration,
            supervisor: task.supervisor,
            induvidualOrUnit: task.induvidualOrUnit,
            unit: unit,
            employee: employee,
            prototype: prototype,
            date: task.date,
          };
          const taskEn = this.taskRepository.create(taskDbObj);
          resolve({
            message: 'success',
            status: HttpStatus.OK,
            data: this.taskRepository.save(taskEn),
          });
        }
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateTheTask(task: TaskCreateDTO): Promise<Object> {
    try {
      return new Promise(async (resolve, reject) => {
        const unit = await this.unitService.getUnitById(task.unit);
        const employee = await this.empService.getEmployeeById(task.employee);
        const prototype = await this.prototypeService.getPrototypeById(
          task.prototype,
        );
        if (unit && employee && prototype) {
          const taskDbObj = {
            id: task.id,
            title: task.title,
            avg_duration: task.avg_duration,
            supervisor: task.supervisor,
            induvidualOrUnit: task.induvidualOrUnit,
            unit: unit,
            employee: employee,
            prototype: prototype,
            date: task.date,
          };
          const taskEn = this.taskRepository.create(taskDbObj);
          resolve({
            message: 'success',
            status: HttpStatus.OK,
            data: this.taskRepository.save(taskEn),
          });
        }
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getTaskById(id: string): Promise<Task> {
    try {
      return this.taskRepository.findOne({
        where: { id: id },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
