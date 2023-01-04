import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExtraMaterialCreateDTO } from './dto/create-dto.input';
import { ExtraMaterial } from './entity/extra_meterial.entity';
import { TaskService } from '../task/task.service';
import { MaterialService } from '../material/material.service';

@Injectable()
export class ExtraMaterialService {
  constructor(
    @InjectRepository(ExtraMaterial)
    private exMatRepository: Repository<ExtraMaterial>,
    @Inject(TaskService)
    private readonly taskService: TaskService,
    @Inject(MaterialService)
    private readonly materialService: MaterialService,
  ) {}

  async createExtraMaterial(extMat: ExtraMaterialCreateDTO): Promise<Object> {
    try {
      return new Promise(async (resolve, reject) => {
        const task = await this.taskService.getTaskById(extMat.task);
        const material = await this.materialService.getMaterialById(
          extMat.material,
        );
        if (material && task) {
          const exMatDbObj = {
            id: extMat.id,
            task: task,
            material: material,
            qty: extMat.qty,
            date: extMat.date,
          };
          const extEn = this.exMatRepository.create(exMatDbObj);
          resolve({
            message: 'success',
            status: HttpStatus.OK,
            data: this.exMatRepository.save(extEn),
          });
        }
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getExtMaterilRequestByID(id: string): Promise<ExtraMaterial> {
    try {
      return this.exMatRepository.findOne({
        where: { id: id },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
