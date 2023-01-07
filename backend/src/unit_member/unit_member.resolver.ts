import { Resolver, Query, Args, Context, Mutation } from '@nestjs/graphql';
import { UseFilters, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../helper/exception.filter';
import { UnitMember } from './entity/unit_member.entity';
import { UnitMemberService } from './unit_member.service';
import { UnitMemberCreateDTO } from './dto/create_unit_member.input';
import { UnitMemberGetDTO } from './dto/get-unitmembers.dto';
import { Employee } from 'src/employee/entity/employee.entity';

@Resolver(() => UnitMember)
export class UnitMemberResolver {
  constructor(private unitMemService: UnitMemberService) {}

  @Mutation(() => UnitMember, { name: 'addUnitMember' })
  @UseFilters(new HttpExceptionFilter())
  async addUnitMember(
    @Args('id') id: string,
    @Args('employeeId') employeeId: string,
    @Args('unitId') unitId: string,
    @Context() context,
  ) {
    return new Promise(async (resolve, reject) => {
      const unitMem = new UnitMemberCreateDTO();
      unitMem.id = id;
      unitMem.employeeId = employeeId;
      unitMem.unitId = unitId;
      resolve(await this.unitMemService.addUnitMember(unitMem));
    }).then(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      },
    );
  }

  @Mutation(() => UnitMember, { name: 'updateTheUnit' })
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

  @Query(() => [UnitMemberGetDTO], { name: 'getAllUnitMembers' })
  @UseFilters(new HttpExceptionFilter())
  async getAllUsers(@Args('test') test: string) {
    try {
      return (await this.unitMemService.getAllUnitMembers()).map(
        async (item) => {
          const employee: Employee =
            await this.unitMemService.getEmployeeAsUnitMember(item.employeeId);
          const obj: UnitMemberGetDTO = {
            id: item.id,
            unit: item.unit,
            employee: employee,
          };
          return obj;
        },
      );
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => UnitMember, { name: 'getUnitMemberById' })
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

  @Query(() => UnitMember, { name: 'getUnitMemberByEmployeeId' })
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
