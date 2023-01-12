import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { Prototype } from './entity/prototype.entity';
import { PrototypeService } from './prototype.service';
import { PrototypeCreateDTO } from './dto/create-dto.input';

@Resolver(() => Prototype)
export class PrototypeResolver {
  constructor(private prototypeService: PrototypeService) {}

  @Mutation(() => Prototype, { name: 'createPrototype' })
  @UseFilters(new HttpExceptionFilter())
  async createPrototype(
    @Args('id') id: string,
    @Args('name') name: string,
    @Args('avg_duration') avg_duration: number,
    @Args('time_unit') time_unit: string,
    @Args('avg_cost') avg_cost: number,
    @Args('materials') materials: string,
    @Context() context,
  ) {
    return new Promise(async (resolve, reject) => {
      const prototype = new Prototype();
      prototype.id = id;
      prototype.name = name;
      prototype.avg_duration = avg_duration;
      prototype.time_unit = time_unit;
      prototype.avg_cost = avg_cost;
      prototype.materials = materials;
      resolve(await this.prototypeService.createPrototype(prototype));
    }).then(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      },
    );
  }

  @Mutation(() => Prototype, { name: 'updatePrototype' })
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

  @Query(() => [Prototype], { name: 'getAllPrototypes' })
  @UseFilters(new HttpExceptionFilter())
  async getAllProjects(@Args('test') test: string, @Context() context) {
    try {
      const usedBy = await this.prototypeService.getAllPrototypes();
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => Prototype, { name: 'getPrototypeById' })
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
