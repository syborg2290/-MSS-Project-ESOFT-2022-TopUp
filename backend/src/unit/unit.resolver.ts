import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { Unit } from './entity/unit.entity';
import { UnitService } from './unit.service';
import { UnitCreateDTO } from './dto/create-unit.input';

@Resolver(() => Unit)
export class UnitResolver {
  constructor(private unitService: UnitService) {}

  @Mutation(() => Unit, { name: 'createUnit' })
  @UseFilters(new HttpExceptionFilter())
  async createUnit(
    @Args('id') id: string,
    @Args('code') code: string,
    @Args('department') department: string,
    @Context() context,
  ) {
    return new Promise(async (resolve, reject) => {
      const unit = new UnitCreateDTO();
      unit.id = id;
      unit.code = code;
      unit.department = department;
      resolve(await this.unitService.createUnit(unit));
    }).then(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      },
    );
  }

  @Mutation(() => Unit, { name: 'updateUnit' })
  @UseFilters(new HttpExceptionFilter())
  async updateUnit(@Args('unit') unit: UnitCreateDTO, @Context() context) {
    try {
      let result: object = {};
      let unitRe: any = await this.unitService.updateUnit(unit);
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

  @Query(() => [Unit], { name: 'getAllUnits' })
  @UseFilters(new HttpExceptionFilter())
  async getAllUnits(@Args('test') test: string, @Context() context) {
    try {
      const usedBy = await this.unitService.getAllUnits();
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => Unit, { name: 'getUnitById' })
  @UseFilters(new HttpExceptionFilter())
  async getUnitById(@Args('id') id: string) {
    try {
      const usedBy = await this.unitService.getUnitById(id);
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => Unit, { name: 'getUnitByCode' })
  @UseFilters(new HttpExceptionFilter())
  async getUnitByCode(@Args('code') code: string) {
    try {
      const usedBy = await this.unitService.getUnitByCode(code);
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
