import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { Material } from './entity/material.entity';
import { MaterialService } from './material.service';
import { MaterialCreateDTO } from './dto/create-dto-input';

@Resolver(() => Material)
export class MaterialResolver {
  constructor(private materialService: MaterialService) {}

  @Mutation(() => Material, { name: 'createMaterial' })
  @UseFilters(new HttpExceptionFilter())
  async createMaterial(
    @Args('id') id: string,
    @Args('name') name: string,
    @Args('description') description: string,
    @Args('measurement_unit') measurement_unit: string,
    @Args('cost_pre_unit') cost_pre_unit: number,
    @Context() context,
  ) {
    return new Promise(async (resolve, reject) => {
      const material = new MaterialCreateDTO();
      material.id = id;
      material.name = name;
      material.description = description;
      material.measurement_unit = measurement_unit;
      material.cost_pre_unit = cost_pre_unit;

      resolve(await this.materialService.createMaterial(material));
    }).then(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      },
    );
  }

  @Mutation(() => Material, { name: 'updateMaterial' })
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

  @Query(() => [Material], { name: 'getAllMaterials' })
  @UseFilters(new HttpExceptionFilter())
  async getAllProjects(@Args('test') test: string, @Context() context) {
    try {
      const usedBy = await this.materialService.getAllMaterials();
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => Material, { name: 'getMaterialById' })
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
