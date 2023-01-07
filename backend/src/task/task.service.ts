import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UnitService } from '../unit/unit.service';
import { Repository } from 'typeorm';
import { Task } from './entity/task.entity';
import { TaskCreateDTO } from './dto/create-dto.input';
import { EmployeeService } from 'src/employee/employee.service';
import { PrototypeService } from 'src/prototype/prototype.service';
import { ProjectService } from 'src/project/project.service';
import { InventoryService } from 'src/inventory/inventory.service';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    @Inject(ProjectService)
    private readonly projectService: ProjectService,
    @Inject(UnitService)
    private readonly unitService: UnitService,
    @Inject(EmployeeService)
    private readonly empService: EmployeeService,
    @Inject(PrototypeService)
    private readonly prototypeService: PrototypeService,
    @Inject(InventoryService)
    private readonly inventoryService: InventoryService,
  ) {}

  async addTask(task: TaskCreateDTO): Promise<Task> {
    try {
      const project = await this.projectService.getProjectById(task.project);
      const unit = await this.unitService.getUnitById(task.unit);
      const employee = await this.empService.getEmployeeById(task.employee);
      const prototype = await this.prototypeService.getPrototypeById(
        task.prototype,
      );
      if (unit && employee && prototype) {
        const taskDbObj = {
          id: task.id,
          title: task.title,
          description: task.description,
          taskstatus: task.taskstatus,
          progress: task.progress,
          supervisor: task.supervisor,
          induvidualOrUnit: task.induvidualOrUnit,
          project: project,
          unit: unit,
          employee: employee,
          prototype: prototype,
          start_time: task.start_time,
          finished_time: task.finished_time,
        };

        const taskEn = this.taskRepository.create(taskDbObj);
        if (JSON.parse(prototype.materials).Material1.name !== '') {
          const qty = JSON.parse(prototype.materials).Material1.qty;
          const id = JSON.parse(prototype.materials).Material1.id;
          await this.inventoryService.updateInventoryQty(qty, unit.id, id);
        }
        if (JSON.parse(prototype.materials).Material2.name !== '') {
          const qty = JSON.parse(prototype.materials).Material2.qty;
          const id = JSON.parse(prototype.materials).Material2.id;
          await this.inventoryService.updateInventoryQty(qty, unit.id, id);
        }
        if (JSON.parse(prototype.materials).Material3.name !== '') {
          const qty = JSON.parse(prototype.materials).Material3.qty;
          const id = JSON.parse(prototype.materials).Material3.id;
          await this.inventoryService.updateInventoryQty(qty, unit.id, id);
        }

        if (JSON.parse(prototype.materials).Material4.name !== '') {
          const qty = JSON.parse(prototype.materials).Material4.qty;
          const id = JSON.parse(prototype.materials).Material4.id;
          await this.inventoryService.updateInventoryQty(qty, unit.id, id);
        }

        if (JSON.parse(prototype.materials).Material5.name !== '') {
          const qty = JSON.parse(prototype.materials).Material5.qty;
          const id = JSON.parse(prototype.materials).Material5.id;
          await this.inventoryService.updateInventoryQty(qty, unit.id, id);
        }

        if (JSON.parse(prototype.materials).Material6.name !== '') {
          const qty = JSON.parse(prototype.materials).Material6.qty;
          const id = JSON.parse(prototype.materials).Material6.id;
          await this.inventoryService.updateInventoryQty(qty, unit.id, id);
        }

        return this.taskRepository.save(taskEn);
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateTheTask(task: TaskCreateDTO): Promise<Object> {
    try {
      return new Promise(async (resolve, reject) => {
        const project = await this.projectService.getProjectById(task.project);
        const unit = await this.unitService.getUnitById(task.unit);
        const employee = await this.empService.getEmployeeById(task.employee);
        const prototype = await this.prototypeService.getPrototypeById(
          task.prototype,
        );
        if (unit && employee && prototype) {
          const taskDbObj = {
            id: task.id,
            title: task.title,
            description: task.description,
            taskstatus: task.taskstatus,
            progress: task.progress,
            supervisor: task.supervisor,
            induvidualOrUnit: task.induvidualOrUnit,
            project: project,
            unit: unit,
            employee: employee,
            prototype: prototype,
            start_time: task.start_time,
            finished_time: task.finished_time,
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

  getAllTasks(): Promise<Task[]> {
    try {
      return this.taskRepository
        .createQueryBuilder('task')
        .leftJoinAndSelect('task.project', 'project')
        .leftJoinAndSelect('task.prototype', 'prototype')
        .leftJoinAndSelect('task.unit', 'unit')
        .leftJoinAndSelect('task.employee', 'employee')
        .getMany();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateTaskStatus(id: string, newStatus: string): Promise<Object> {
    try {
      return new Promise(async (resolve, reject) => {
        const task = await this.getTaskById(id);
        if (task) {
          task.taskstatus = newStatus;
          resolve({
            message: 'success',
            status: HttpStatus.OK,
            data: this.taskRepository.save(task),
          });
        }
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateTaskProgress(id: string, progress: number): Promise<Object> {
    try {
      return new Promise(async (resolve, reject) => {
        const task = await this.getTaskById(id);
        if (task) {
          task.progress = progress;
          resolve({
            message: 'success',
            status: HttpStatus.OK,
            data: this.taskRepository.save(task),
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

  getTaskByWithUnitId(id: string): Promise<Task> {
    try {
      return this.taskRepository
        .createQueryBuilder('task')
        .leftJoinAndSelect('task.unit', 'unit')
        .where('task.id = :id', { id: id })
        .getOne();
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
