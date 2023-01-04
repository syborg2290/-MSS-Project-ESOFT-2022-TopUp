import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { Income } from './entity/income.entity';
import { IncomeService } from './income.service';
import { IncomeCreateDTO } from './dto/create-dto.input';

@Resolver(() => Income)
export class IncomeResolver {
  constructor(private incomeService: IncomeService) {}

  @Mutation(() => [Income], { name: 'createIncome' })
  @UseFilters(new HttpExceptionFilter())
  async createIncome(
    @Args('income') income: IncomeCreateDTO,
    @Context() context,
  ) {
    try {
      let result: object = {};
      let incomeRe: any = await this.incomeService.createIncome(income);
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

  @Query(() => [Income], { name: 'getIncomeById' })
  @UseFilters(new HttpExceptionFilter())
  async getIncomeById(@Args('id') id: string) {
    try {
      const income = await this.incomeService.getIncomeById(id);
      return income;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
