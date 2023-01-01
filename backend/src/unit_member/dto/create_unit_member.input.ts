import { Field, InputType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class UnitMemberCreateDTO {
  @Field()
  @Column()
  id: string;
  @Field()
  @Column()
  employeeId: string;
  @Field()
  @Column()
  unitId: string;
}
