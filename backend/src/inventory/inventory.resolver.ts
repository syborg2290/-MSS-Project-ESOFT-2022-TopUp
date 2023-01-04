import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { Inventory } from './entity/inventory.entity';
import { InventoryService } from './inventory.service';
import { InventoryCreateDTO } from './dto/create-dto.input';

@Resolver(() => Inventory)
export class InventroyResolver {
  constructor(private inventoryService: InventoryService) {}

  @Mutation(() => [Inventory], { name: 'addInventory' })
  @UseFilters(new HttpExceptionFilter())
  async addInventory(
    @Args('inventroy') inventory: InventoryCreateDTO,
    @Context() context,
  ) {
    try {
      let result: object = {};
      let invRe: any = await this.inventoryService.addInventory(inventory);
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

  @Mutation(() => [Inventory], { name: 'updateInventory' })
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

  @Query(() => [Inventory], { name: 'getInventoryById' })
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

  @Query(() => [Inventory], { name: 'getInventoryByUnit' })
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
