import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { Material } from './entity/material.entity';
import { MaterialService } from './material.service';
import { MaterialCreateDTO } from './dto/create-dto-input';

@Resolver(() => Material)
export class MaterialResolver {
  constructor(private materialService: MaterialService) {}

  @Mutation(() => [Material], { name: 'createMaterial' })
  @UseFilters(new HttpExceptionFilter())
  async createMaterial(
    @Args('material') material: MaterialCreateDTO,
    @Context() context,
  ) {
    try {
      let result: object = {};
      let unitRe: any = await this.materialService.createMaterial(material);
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

  @Mutation(() => [Material], { name: 'updateMaterial' })
  @UseFilters(new HttpExceptionFilter())
  async updateMaterial(
    @Args('material') material: MaterialCreateDTO,
    @Context() context,
  ) {
    try {
      let result: object = {};
      let unitRe: any = await this.materialService.updateMaterial(material);
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

  @Query(() => [Material], { name: 'getMaterialById' })
  @UseFilters(new HttpExceptionFilter())
  async getMaterialById(@Args('id') id: string) {
    try {
      const usedBy = await this.materialService.getMaterialById(id);
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
