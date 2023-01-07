import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { Inventory } from './entity/inventory.entity';
import { InventoryService } from './inventory.service';
import { InventoryCreateDTO } from './dto/create-dto.input';
import { InvenMaterialGetDTO } from './dto/get-material.dto';

@Resolver(() => Inventory)
export class InventroyResolver {
  constructor(private inventoryService: InventoryService) {}

  @Mutation(() => Inventory, { name: 'addInventory' })
  @UseFilters(new HttpExceptionFilter())
  async addInventory(
    @Args('id') id: string,
    @Args('unit') unit: string,
    @Args('qty') qty: number,
    @Args('material') material: string,
    @Context() context,
  ) {
    return new Promise(async (resolve, reject) => {
      const inventory = new InventoryCreateDTO();
      inventory.id = id;
      inventory.unit = unit;
      inventory.qty = qty;
      inventory.material = material;
      console.log(inventory);
      resolve(await this.inventoryService.addInventory(inventory));
    }).then(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      },
    );
  }

  @Query(() => [InvenMaterialGetDTO], { name: 'getAllInventory' })
  @UseFilters(new HttpExceptionFilter())
  async getAllInventory(@Args('test') test: string) {
    try {
      return (await this.inventoryService.getAllInventory()).map(
        async (item) => {
          const obj: InvenMaterialGetDTO = {
            id: item.id,
            unit: item.unit,
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

  @Mutation(() => Inventory, { name: 'updateInventory' })
  @UseFilters(new HttpExceptionFilter())
  async updateInventory(
    @Args('inventroy') inventory: InventoryCreateDTO,
    @Context() context,
  ) {
    try {
      let result: object = {};
      let invRe: any = await this.inventoryService.updateInventory(inventory);
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

  @Query(() => Inventory, { name: 'getInventoryById' })
  @UseFilters(new HttpExceptionFilter())
  async getInventoryById(@Args('id') id: string) {
    try {
      const usedBy = await this.inventoryService.getInventoryById(id);
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => Inventory, { name: 'getInventoryByUnit' })
  @UseFilters(new HttpExceptionFilter())
  async getInventoryByUnit(@Args('unit') unit: string) {
    try {
      const usedBy = await this.inventoryService.getInventoryByUnit(unit);
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
