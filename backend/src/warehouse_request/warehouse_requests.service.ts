import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WarehouseRequest } from './entity/warehouse_request.entity';
import { InventoryService } from 'src/inventory/inventory.service';
import { WarehouseReqCreateDTO } from './dto/create-dto.input';

@Injectable()
export class WarehouseRequestsService {
  constructor(
    @InjectRepository(WarehouseRequest)
    private warehouseRequestsRepository: Repository<WarehouseRequest>,
    @Inject(forwardRef(() => InventoryService))
    private readonly inventoryService: InventoryService,
  ) {}

  async addWarehouseRequest(
    warehouseRequest: WarehouseReqCreateDTO,
  ): Promise<WarehouseRequest> {
    try {
      const inventory = await this.inventoryService.getInventoryById(
        warehouseRequest.inventory,
      );
      console.log(inventory);
      if (inventory) {
        const DbObj = {
          id: warehouseRequest.id,
          qty: warehouseRequest.qty,
          inventory: inventory,
          date: warehouseRequest.date,
        };
        const warReEn = this.warehouseRequestsRepository.create(DbObj);
        return this.warehouseRequestsRepository.save(warReEn);
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getAllWarehouseRequests(): Promise<WarehouseRequest[]> {
    try {
      return this.warehouseRequestsRepository
        .createQueryBuilder('warehouse_request')
        .leftJoinAndSelect('warehouse_request.inventory', 'inventory')
        .getMany();
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
