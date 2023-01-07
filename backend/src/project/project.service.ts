import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectCreateDTO } from './dto/create-dto.input';
import { Project } from './entity/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  async createProject(project: ProjectCreateDTO): Promise<Project> {
    try {
      const projectEn = this.projectRepository.create(project);

      return this.projectRepository.save(projectEn);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateProject(project: ProjectCreateDTO): Promise<Object> {
    try {
      return new Promise(async (resolve, reject) => {
        const projectEn = this.projectRepository.create(project);
        resolve({
          message: 'success',
          status: HttpStatus.OK,
          data: this.projectRepository.save(projectEn),
        });
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getAllProjects(): Promise<Project[]> {
    try {
      return this.projectRepository.find();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getProjectById(id: string): Promise<Project> {
    try {
      return this.projectRepository.findOne({
        where: { id: id },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
