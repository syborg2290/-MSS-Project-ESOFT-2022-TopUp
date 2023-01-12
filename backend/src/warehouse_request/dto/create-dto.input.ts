import { Field, InputType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class WarehouseReqCreateDTO {
  @Field()
  @Column()
  id: string;
  @Field()
  @Column()
  qty: Number;
  @Field()
  @Column()
  inventory: string;
  @Field()
  @Column()
  date: string;
}
