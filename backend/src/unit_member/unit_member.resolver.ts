import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { UnitMember } from './entity/unit_member.entity';
import { UnitMemberService } from './unit_member.service';
import { UnitMemberCreateDTO } from './dto/create_unit_member.input';

@Resolver(() => UnitMember)
export class UnitMemberResolver {
  constructor(private unitMemService: UnitMemberService) {}

  @Mutation(() => [UnitMember], { name: 'addUnitMember' })
  @UseFilters(new HttpExceptionFilter())
  async addUnitMember(
    @Args('unitMember') unitMem: UnitMemberCreateDTO,
    @Context() context,
  ) {
    try {
      let result: object = {};
      let unitRe: any = await this.unitMemService.addUnitMember(unitMem);
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

  @Mutation(() => [UnitMember], { name: 'updateTheUnit' })
  @UseFilters(new HttpExceptionFilter())
  async updateTheUnit(
    @Args('newUnitCode') newUnitCode: string,
    @Args('id') id: string,
    @Context() context,
  ) {
    try {
      let result: object = {};
      let unitRe: any = await this.unitMemService.updateTheUnit(
        newUnitCode,
        id,
      );
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

  @Query(() => [UnitMember], { name: 'getUnitMemberById' })
  @UseFilters(new HttpExceptionFilter())
  async getUnitMemberById(@Args('id') id: string) {
    try {
      const usedBy = await this.unitMemService.getUnitMemberById(id);
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => [UnitMember], { name: 'getUnitMemberByEmployeeId' })
  @UseFilters(new HttpExceptionFilter())
  async getUnitMemberByEmployeeId(@Args('empId') empId: string) {
    try {
      const usedBy = await this.unitMemService.getUnitMemberByEmployeeId(empId);
      return usedBy;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
