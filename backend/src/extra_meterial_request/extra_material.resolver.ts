import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { ExtraMaterial } from './entity/extra_meterial.entity';
import { ExtraMaterialService } from './extra_material.service';
import { ExtraMaterialCreateDTO } from './dto/create-dto.input';

@Resolver(() => ExtraMaterial)
export class ExtraMaterialResolver {
  constructor(private ExtraMaterialService: ExtraMaterialService) {}

  @Mutation(() => [ExtraMaterial], { name: 'createExtraMaterial' })
  @UseFilters(new HttpExceptionFilter())
  async createExtraMaterial(
    @Args('exMat') extMat: ExtraMaterialCreateDTO,
    @Context() context,
  ) {
    try {
      let result: object = {};
      let incomeRe: any = await this.ExtraMaterialService.createExtraMaterial(
        extMat,
      );
      if (incomeRe.status != HttpStatus.OK) {
        result = {
          status: incomeRe.status,
        };
      } else {
        result = {
          status: incomeRe.status,
        };
      }

      return result;
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
