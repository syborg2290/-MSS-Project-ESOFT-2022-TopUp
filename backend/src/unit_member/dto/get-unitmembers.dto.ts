import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Employee } from "src/employee/entity/employee.entity";
import { Unit } from "src/unit/entity/unit.entity";

@ObjectType()
export class UnitMemberGetDTO {
  @Field()
  id: string;
  @Field()
  unit: Unit;
  @Field()
  employee: Employee;
}
