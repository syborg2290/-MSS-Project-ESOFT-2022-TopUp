import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { WarehouseRequest } from './entity/warehouse_request.entity';
import { WarehouseRequestsService } from './warehouse_requests.service';
import { WarehouseReqCreateDTO } from './dto/create-dto.input';
import { WareReGetDTO } from './dto/get-warehouseRe.dto';

@Resolver(() => WarehouseRequest)
export class WarehouseReResolver {
  constructor(private warehouseReService: WarehouseRequestsService) {}

  @Mutation(() => WarehouseRequest, { name: 'addWarehouseRequest' })
  @UseFilters(new HttpExceptionFilter())
  async addWarehouseRequest(
    @Args('id') id: string,
    @Args('qty') qty: number,
    @Args('inventory') inventory: string,
    @Args('date') date: string,
    @Context() context,
  ) {
    return new Promise(async (resolve, reject) => {
      const unitMem = new WarehouseReqCreateDTO();
      unitMem.id = id;
      unitMem.qty = qty;
      unitMem.inventory = inventory;
      unitMem.date = date;
      resolve(await this.warehouseReService.addWarehouseRequest(unitMem));
    }).then(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      },
    );
  }

  @Query(() => [WareReGetDTO], { name: 'getAllWarehouseRe' })
  @UseFilters(new HttpExceptionFilter())
  async getAllWarehouseRe(@Args('test') test: string) {
    try {
      return (await this.warehouseReService.getAllWarehouseRequests()).map(
        async (item) => {
          const obj: WareReGetDTO = {
            id: item.id,
            qty: item.qty,
            date: item.date,
            inventory: item.inventory,
          };
          return obj;
        },
      );
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
