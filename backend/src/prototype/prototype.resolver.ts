import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { Prototype } from './entity/prototype.entity';
import { PrototypeService } from './prototype.service';
import { PrototypeCreateDTO } from './dto/create-dto.input';

@Resolver(() => Prototype)
export class PrototypeResolver {
  constructor(private prototypeService: PrototypeService) {}

  @Mutation(() => [Prototype], { name: 'createPrototype' })
  @UseFilters(new HttpExceptionFilter())
  async createPrototype(
    @Args('prototype') prototype: PrototypeCreateDTO,
    @Context() context,
  ) {
    try {
      let result: object = {};
      let unitRe: any = await this.prototypeService.createPrototype(prototype);
      if (unitRe.status != HttpStatus.OK) {
        result = {
          status: unitRe.status,
        };
      } else {
        result = {
          status: unitRe.status,
        };
      }

      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Mutation(() => [Prototype], { name: 'updatePrototype' })
  @UseFilters(new HttpExceptionFilter())
  async updatePrototype(
    @Args('prototype') prototype: PrototypeCreateDTO,
    @Context() context,
  ) {
    try {
      let result: object = {};
      let unitRe: any = await this.prototypeService.updatePrototype(prototype);
      if (unitRe.status != HttpStatus.OK) {
        result = {
          status: unitRe.status,
        };
      } else {
        result = {
          status: unitRe.status,
        };
      }

      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => [Prototype], { name: 'getPrototypeById' })
  @UseFilters(new HttpExceptionFilter())
  async getPrototypeById(@Args('id') id: string) {
    try {
      const usedBy = await this.prototypeService.getPrototypeById(id);
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
