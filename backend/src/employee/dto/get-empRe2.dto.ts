import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class EmployeeRetenCountGetDTO {
  @Field()
  count: number;
  @Field()
  presentage: number;
}
