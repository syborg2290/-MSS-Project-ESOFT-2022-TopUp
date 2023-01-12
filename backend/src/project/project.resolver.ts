import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { Project } from './entity/project.entity';
import { ProjectService } from './project.service';
import { ProjectCreateDTO } from './dto/create-dto.input';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private projectService: ProjectService) {}

  @Mutation(() => Project, { name: 'createProject' })
  @UseFilters(new HttpExceptionFilter())
  async createProject(
    @Args('id') id: string,
    @Args('title') title: string,
    @Args('factory') factory: string,
    @Args('description') description: string,
    @Args('client') client: string,
    @Args('estimation_budget') estimation_budget: number,
    @Args('estimation_duration') estimation_duration: number,
    @Args('duration_unit') duration_unit: string,
    @Args('starting_date') starting_date: string,
    @Context() context,
  ) {
    return new Promise(async (resolve, reject) => {
      const project = new ProjectCreateDTO();
      project.id = id;
      project.title = title;
      project.factory = factory;
      project.description = description;
      project.client = client;
      project.estimation_budget = estimation_budget;
      project.estimation_duration = estimation_duration;
      project.duration_unit = duration_unit;
      project.starting_date = starting_date;
      resolve(await this.projectService.createProject(project));
    }).then(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      },
    );
  }

  @Mutation(() => Project, { name: 'updateProject' })
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

  @Query(() => [Project], { name: 'getAllProjects' })
  @UseFilters(new HttpExceptionFilter())
  async getAllProjects(@Args('test') test: string, @Context() context) {
    try {
      const usedBy = await this.projectService.getAllProjects();
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => Project, { name: 'getProjectById' })
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
