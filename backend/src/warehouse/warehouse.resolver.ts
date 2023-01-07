import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { WarehouseInventory } from './entity/warehouse.enity';
import { WarehouseService } from './warehouse.service';
import { WarehouseInventoryCreateDTO } from './dto/create-dto.input';
import { WarehouseInventoryGetDTO } from './dto/get-warehouse_inventory.dto';

@Resolver(() => WarehouseInventory)
export class WarehouseResolver {
  constructor(private warehouseService: WarehouseService) {}

  @Mutation(() => WarehouseInventory, { name: 'addWarehouseInventory' })
  @UseFilters(new HttpExceptionFilter())
  async addInventory(
    @Args('id') id: string,
    @Args('qty') qty: number,
    @Args('material') material: string,
    @Context() context,
  ) {
    return new Promise(async (resolve, reject) => {
      const inventory = new WarehouseInventoryCreateDTO();
      inventory.id = id;
      inventory.qty = qty;
      inventory.material = material;
      resolve(await this.warehouseService.addInventory(inventory));
    }).then(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      },
    );
  }

  @Mutation(() => WarehouseInventory, { name: 'updateInventory' })
  @UseFilters(new HttpExceptionFilter())
  async updateInventory(
    @Args('inventroy') inventory: WarehouseInventoryCreateDTO,
    @Context() context,
  ) {
    try {
      let result: object = {};
      let invRe: any = await this.warehouseService.updateInventory(inventory);
      if (invRe.status != HttpStatus.OK) {
        result = {
          status: invRe.status,
        };
      } else {
        result = {
          status: invRe.status,
        };
      }

      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => [WarehouseInventoryGetDTO], { name: 'getAllWarehouse' })
  @UseFilters(new HttpExceptionFilter())
  async getAllWarehouse(@Args('test') test: string) {
    try {
      return (await this.warehouseService.getAllInventoryWarehouse()).map(
        async (item) => {
          const obj: WarehouseInventoryGetDTO = {
            id: item.id,
            qty: item.qty,
            material: item.material,
          };
          return obj;
        },
      );
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => WarehouseInventory, { name: 'getWarehouseInventoryById' })
  @UseFilters(new HttpExceptionFilter())
  async getInventoryById(@Args('id') id: string) {
    try {
      const usedBy = await this.warehouseService.getInventoryById(id);
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
