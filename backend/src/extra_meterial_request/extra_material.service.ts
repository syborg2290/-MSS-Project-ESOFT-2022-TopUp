import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExtraMaterialCreateDTO } from './dto/create-dto.input';
import { ExtraMaterial } from './entity/extra_meterial.entity';
import { TaskService } from '../task/task.service';
import { MaterialService } from '../material/material.service';
import { InventoryService } from 'src/inventory/inventory.service';

@Injectable()
export class ExtraMaterialService {
  constructor(
    @InjectRepository(ExtraMaterial)
    private exMatRepository: Repository<ExtraMaterial>,
    @Inject(TaskService)
    private readonly taskService: TaskService,
    @Inject(MaterialService)
    private readonly materialService: MaterialService,
    @Inject(InventoryService)
    private readonly inventoryService: InventoryService,
  ) {}

  async createExtraMaterial(extMat: ExtraMaterialCreateDTO): Promise<Object> {
    try {
      const task = await this.taskService.getTaskByWithUnitId(extMat.task);
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
        await this.inventoryService.updateInventoryQty(
          extMat.qty,
          task.unit.id,
          material.id,
        );
        return this.exMatRepository.save(extEn);
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getAllExMat(): Promise<ExtraMaterial[]> {
    try {
      return this.exMatRepository
        .createQueryBuilder('extra_material')
        .leftJoinAndSelect('extra_material.task', 'task')
        .leftJoinAndSelect('extra_material.material', 'material')
        .getMany();
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
