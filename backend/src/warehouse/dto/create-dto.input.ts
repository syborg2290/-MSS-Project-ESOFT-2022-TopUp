import { Field, InputType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class WarehouseInventoryCreateDTO {
  @Field()
  @Column()
  id: string;
  @Field()
  @Column()
  qty: number;
  @Field()
  @Column()
  material: string;
}
