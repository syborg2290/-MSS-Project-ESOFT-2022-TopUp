import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { Project } from './entity/project.entity';
import { ProjectService } from './project.service';
import { ProjectCreateDTO } from './dto/create-dto.input';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private projectService: ProjectService) {}

  @Mutation(() => [Project], { name: 'createProject' })
  @UseFilters(new HttpExceptionFilter())
  async createProject(
    @Args('project') project: ProjectCreateDTO,
    @Context() context,
  ) {
    try {
      let result: object = {};
      let projectRe: any = await this.projectService.createProject(project);
      if (projectRe.status != HttpStatus.OK) {
        result = {
          status: projectRe.status,
        };
      } else {
        result = {
          status: projectRe.status,
        };
      }

      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Mutation(() => [Project], { name: 'updateProject' })
  @UseFilters(new HttpExceptionFilter())
  async updateProject(
    @Args('project') project: ProjectCreateDTO,
    @Context() context,
  ) {
    try {
      let result: object = {};
      let projectRe: any = await this.projectService.createProject(project);
      if (projectRe.status != HttpStatus.OK) {
        result = {
          status: projectRe.status,
        };
      } else {
        result = {
          status: projectRe.status,
        };
      }

      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => [Project], { name: 'getProjectById' })
  @UseFilters(new HttpExceptionFilter())
  async getProjectById(@Args('id') id: string) {
    try {
      const project = await this.projectService.getProjectById(id);
      return project;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
