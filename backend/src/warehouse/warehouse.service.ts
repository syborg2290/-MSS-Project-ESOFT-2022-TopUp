import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaterialService } from 'src/material/material.service';
import { WarehouseInventory } from './entity/warehouse.enity';
import { WarehouseInventoryCreateDTO } from './dto/create-dto.input';

@Injectable()
export class WarehouseService {
  constructor(
    @InjectRepository(WarehouseInventory)
    private warehouseInventRepository: Repository<WarehouseInventory>,
    @Inject(MaterialService)
    private readonly materialService: MaterialService,
  ) {}

  async addInventory(
    invent: WarehouseInventoryCreateDTO,
  ): Promise<WarehouseInventory> {
    try {
      const material = await this.materialService.getMaterialById(
        invent.material,
      );
      if (material) {
        const invenDbObj = {
          id: invent.id,
          qty: invent.qty,
          material: material,
        };
        const inventoryEn = this.warehouseInventRepository.create(invenDbObj);
        return this.warehouseInventRepository.save(inventoryEn);
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateInventory(invent: WarehouseInventoryCreateDTO): Promise<Object> {
    try {
      return new Promise(async (resolve, reject) => {
        const material = await this.materialService.getMaterialById(
          invent.material,
        );
        if (material) {
          const invenDbObj = {
            id: invent.id,
            qty: invent.qty,
            material: material,
          };
          const inventoryEn = this.warehouseInventRepository.create(invenDbObj);
          resolve({
            message: 'success',
            status: HttpStatus.OK,
            data: this.warehouseInventRepository.save(inventoryEn),
          });
        }
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getAllInventoryWarehouse(): Promise<WarehouseInventory[]> {
    try {
      return this.warehouseInventRepository
        .createQueryBuilder('warehouse_inventory')
        .leftJoinAndSelect('warehouse_inventory.material', 'material')
        .getMany();
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async updateQtyWarehouse(
    material: string,
    qty: number,
  ): Promise<WarehouseInventory> {
    try {
      const inveRes = await this.warehouseInventRepository
        .createQueryBuilder('warehouse_inventory')
        .leftJoinAndSelect('warehouse_inventory.material', 'material')
        .where('material.id = :id', { id: material })
        .getOne();
      if (inveRes) {
        console.log(inveRes)
        inveRes.qty = inveRes.qty - qty <= 0 ? 0 : inveRes.qty - qty;
        return this.warehouseInventRepository.save(inveRes);
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getInventoryById(id: string): Promise<WarehouseInventory> {
    try {
      return this.warehouseInventRepository.findOne({
        where: { id: id },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
