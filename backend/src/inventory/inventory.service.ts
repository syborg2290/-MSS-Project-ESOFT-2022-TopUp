import { forwardRef, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Repository } from 'typeorm';
import { Inventory } from './entity/inventory.entity';
import { InventoryCreateDTO } from './dto/create-dto.input';
import { MaterialService } from 'src/material/material.service';
import { WarehouseRequestsService } from '../warehouse_request/warehouse_requests.service';
import { WarehouseReqCreateDTO } from './dto/create-dto.warehouseRE.input';
import { WarehouseService } from 'src/warehouse/warehouse.service';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
    @Inject(MaterialService)
    private readonly materialService: MaterialService,
    @Inject(forwardRef(() => WarehouseRequestsService))
    private readonly warehouseRequestsService: WarehouseRequestsService,
    @Inject(forwardRef(() => WarehouseService))
    private readonly warehouseService: WarehouseService,
  ) {}

  async addInventory(invent: InventoryCreateDTO): Promise<Inventory> {
    try {
      const res = await this.addInventorySub(invent);
      if (res) {
        const warehouseRe = new WarehouseReqCreateDTO();
        warehouseRe.id = uuidv4();
        warehouseRe.date = new Date().toDateString();
        warehouseRe.inventory = invent.id;
        warehouseRe.qty = invent.qty;
        await this.warehouseRequestsService.addWarehouseRequest(warehouseRe);
      }
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async addInventorySub(invent: InventoryCreateDTO): Promise<Inventory> {
    try {
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
        const inRes = await this.inventoryRepository.save(inventoryEn);

        await this.warehouseService.updateQtyWarehouse(material.id, invent.qty);
        return inRes;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateInventoryQty(
    qty: number,
    unit: string,
    material: string,
  ): Promise<Inventory> {
    try {
      const inveRes = await this.inventoryRepository
        .createQueryBuilder('inventory')
        .leftJoinAndSelect('inventory.material', 'material')
        .where('material.id = :id', { id: material })
        .where('inventory.unit = :unit', { unit: unit })
        .getOne();
      if (inveRes) {
        inveRes.qty = inveRes.qty - qty <= 0 ? 0 : inveRes.qty - qty;
        if (inveRes.qty - qty <= 0 ? 0 : inveRes.qty - qty <= 5) {
          const warehouseRe = new WarehouseReqCreateDTO();
          warehouseRe.id = uuidv4();
          warehouseRe.date = new Date().toDateString();
          warehouseRe.inventory = inveRes.id;
          warehouseRe.qty = inveRes.qty - qty <= 0 ? 0 : inveRes.qty - qty;
          await this.warehouseRequestsService.addWarehouseRequest(warehouseRe);
        }
        return this.inventoryRepository.save(inveRes);
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getAllInventory(): Promise<Inventory[]> {
    try {
      return this.inventoryRepository
        .createQueryBuilder('inventory')
        .leftJoinAndSelect('inventory.material', 'material')
        .getMany();
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
