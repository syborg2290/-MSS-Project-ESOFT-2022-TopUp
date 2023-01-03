import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { Task } from './entity/task.entity';
import { TaskService } from './task.service';
import { TaskCreateDTO } from './dto/create-dto.input';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private taskService: TaskService) {}

  @Mutation(() => [Task], { name: 'addTask' })
  @UseFilters(new HttpExceptionFilter())
  async addTask(@Args('task') task: TaskCreateDTO, @Context() context) {
    try {
      let result: object = {};
      let unitRe: any = await this.taskService.addTask(task);
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

  @Mutation(() => [Task], { name: 'updateTheTask' })
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

  @Query(() => [Task], { name: 'getTaskById' })
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
