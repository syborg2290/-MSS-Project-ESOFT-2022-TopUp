import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Employee } from "src/employee/entity/employee.entity";

@ObjectType()
export class UserGetDTO {
  @Field()
  id: string;
  @Field()
  username: string;
  @Field()
  email: string;
  @Field()
  employee: Employee;
  @Field()
  role: string;
}
