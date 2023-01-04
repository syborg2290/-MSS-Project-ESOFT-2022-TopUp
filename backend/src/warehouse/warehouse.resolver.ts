import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { WarehouseInventory } from './entity/warehouse.enity';
import { WarehouseService } from './warehouse.service';
import { WarehouseInventoryCreateDTO } from './dto/create-dto.input';

@Resolver(() => WarehouseInventory)
export class WarehouseResolver {
  constructor(private warehouseService: WarehouseService) {}

  @Mutation(() => [WarehouseInventory], { name: 'addInventory' })
  @UseFilters(new HttpExceptionFilter())
  async addInventory(
    @Args('inventroy') inventory: WarehouseInventoryCreateDTO,
    @Context() context,
  ) {
    try {
      let result: object = {};
      let invRe: any = await this.warehouseService.addInventory(inventory);
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

  @Mutation(() => [WarehouseInventory], { name: 'updateInventory' })
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

  @Query(() => [WarehouseInventory], { name: 'getInventoryById' })
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
