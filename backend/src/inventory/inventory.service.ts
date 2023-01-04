import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventory } from './entity/inventory.entity';
import { InventoryCreateDTO } from './dto/create-dto.input';
import { MaterialService } from 'src/material/material.service';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
    @Inject(MaterialService)
    private readonly materialService: MaterialService,
  ) {}

  async addInventory(invent: InventoryCreateDTO): Promise<Object> {
    try {
      return new Promise(async (resolve, reject) => {
        const material = await this.materialService.getMaterialById(
          invent.material,
        );
        if (material) {
          const invenDbObj = {
            id: invent.id,
            unit: invent.unit,
            qty: invent.qty,
            material: material,
          };
          const inventoryEn = this.inventoryRepository.create(invenDbObj);
          resolve({
            message: 'success',
            status: HttpStatus.OK,
            data: this.inventoryRepository.save(inventoryEn),
          });
        }
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateInventory(invent: InventoryCreateDTO): Promise<Object> {
    try {
      return new Promise(async (resolve, reject) => {
        const material = await this.materialService.getMaterialById(
          invent.material,
        );
        if (material) {
          const invenDbObj = {
            id: invent.id,
            unit: invent.unit,
            qty: invent.qty,
            material: material,
          };
          const inventoryEn = this.inventoryRepository.create(invenDbObj);
          resolve({
            message: 'success',
            status: HttpStatus.OK,
            data: this.inventoryRepository.save(inventoryEn),
          });
        }
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getInventoryById(id: string): Promise<Inventory> {
    try {
      return this.inventoryRepository.findOne({
        where: { id: id },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getInventoryByUnit(unit: string): Promise<Inventory> {
    try {
      return this.inventoryRepository.findOne({
        where: { unit: unit },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
