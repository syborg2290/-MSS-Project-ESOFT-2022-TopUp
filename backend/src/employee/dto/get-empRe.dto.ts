import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class EmployeeReten2GetDTO {
  @Field()
  ret: string;
}
