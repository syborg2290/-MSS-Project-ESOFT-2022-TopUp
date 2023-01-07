import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { ExtraMaterial } from './entity/extra_meterial.entity';
import { ExtraMaterialService } from './extra_material.service';
import { ExtraMaterialCreateDTO } from './dto/create-dto.input';
import { ExMaterialGetDTO } from './dto/get-material.dto';

@Resolver(() => ExtraMaterial)
export class ExtraMaterialResolver {
  constructor(private ExtraMaterialService: ExtraMaterialService) {}

  @Mutation(() => ExtraMaterial, { name: 'createExtraMaterial' })
  @UseFilters(new HttpExceptionFilter())
  async createExtraMaterial(
    @Args('id') id: string,
    @Args('task') task: string,
    @Args('material') material: string,
    @Args('qty') qty: number,
    @Args('date') date: string,
    @Context() context,
  ) {
    return new Promise(async (resolve, reject) => {
      const extMat = new ExtraMaterialCreateDTO();
      extMat.id = id;
      extMat.task = task;
      extMat.material = material;
      extMat.qty = qty;
      extMat.date = date;
      resolve(await this.ExtraMaterialService.createExtraMaterial(extMat));
    }).then(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      },
    );
  }

  @Query(() => [ExMaterialGetDTO], { name: 'getAllExMat' })
  @UseFilters(new HttpExceptionFilter())
  async getAllExMat(@Args('test') test: string) {
    try {
      return (await this.ExtraMaterialService.getAllExMat()).map(
        async (item) => {
          const obj: ExMaterialGetDTO = {
            id: item.id,
            task: item.task,
            material: item.material,
            date: item.date,
            qty: item.qty,
          };
          return obj;
        },
      );
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => [ExtraMaterial], { name: 'getExtMaterilRequestByID' })
  @UseFilters(new HttpExceptionFilter())
  async getExtMaterilRequestByID(@Args('id') id: string) {
    try {
      const income = await this.ExtraMaterialService.getExtMaterilRequestByID(
        id,
      );
      return income;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
