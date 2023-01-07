import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { Task } from './entity/task.entity';
import { TaskService } from './task.service';
import { TaskCreateDTO } from './dto/create-dto.input';
import { TasksGetDTO } from './dto/get-tasks.dto';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private taskService: TaskService) {}

  @Mutation(() => Task, { name: 'addTask' })
  @UseFilters(new HttpExceptionFilter())
  async addTask(
    @Args('id') id: string,
    @Args('title') title: string,
    @Args('description') description: string,
    @Args('taskstatus') taskstatus: string,
    @Args('progress') progress: number,
    @Args('supervisor') supervisor: string,
    @Args('induvidualOrUnit') induvidualOrUnit: string,
    @Args('project') project: string,
    @Args('unit') unit: string,
    @Args('employee') employee: string,
    @Args('prototype') prototype: string,
    @Args('start_time') start_time: string,
    @Args('finished_time') finished_time: string,
    @Context() context,
  ) {
    return new Promise(async (resolve, reject) => {
      const task = new TaskCreateDTO();
      task.id = id;
      task.title = title;
      task.description = description;
      task.taskstatus = taskstatus;
      task.progress = progress;
      task.supervisor = supervisor;
      task.induvidualOrUnit = induvidualOrUnit;
      task.project = project;
      task.unit = unit;
      task.employee = employee;
      task.prototype = prototype;
      task.start_time = start_time;
      task.finished_time = finished_time;
      resolve(await this.taskService.addTask(task));
    }).then(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      },
    );
  }

  @Mutation(() => Task, { name: 'updateTheTask' })
  @UseFilters(new HttpExceptionFilter())
  async updateTheTask(@Args('task') task: TaskCreateDTO, @Context() context) {
    try {
      let result: object = {};
      let unitRe: any = await this.taskService.updateTheTask(task);
      if (unitRe.status != HttpStatus.OK) {
        result = {
          status: unitRe.status,
        };
      } else {
        result = {
          status: unitRe.status,
        };
      }

      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => [TasksGetDTO], { name: 'getAllTasks' })
  @UseFilters(new HttpExceptionFilter())
  async getAllTasks(@Args('test') test: string) {
    try {
      return (await this.taskService.getAllTasks()).map(async (item) => {
        const obj: TasksGetDTO = {
          id: item.id,
          unit: item.unit,
          employee: item.employee,
          project: item.project,
          prototype: item.prototype,
          task: item,
        };
        return obj;
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Mutation(() => Task, { name: 'updateTaskStatus' })
  @UseFilters(new HttpExceptionFilter())
  async updateTaskStatus(
    @Args('id') id: string,
    @Args('newStatus') newStatus: string,
    @Context() context,
  ) {
    try {
      let result: object = {};
      let unitRe: any = await this.taskService.updateTaskStatus(id, newStatus);
      if (unitRe.status != HttpStatus.OK) {
        result = {
          status: unitRe.status,
        };
      } else {
        result = {
          status: unitRe.status,
        };
      }

      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Mutation(() => Task, { name: 'updateTaskProgress' })
  @UseFilters(new HttpExceptionFilter())
  async updateTaskProgress(
    @Args('id') id: string,
    @Args('progresss') progresss: number,
    @Context() context,
  ) {
    try {
      let result: object = {};
      let unitRe: any = await this.taskService.updateTaskProgress(
        id,
        progresss,
      );
      if (unitRe.status != HttpStatus.OK) {
        result = {
          status: unitRe.status,
        };
      } else {
        result = {
          status: unitRe.status,
        };
      }

      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => Task, { name: 'getTaskById' })
  @UseFilters(new HttpExceptionFilter())
  async getTaskById(@Args('id') id: string) {
    try {
      const usedBy = await this.taskService.getTaskById(id);
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
