import { Field, ObjectType } from '@nestjs/graphql';
import { Inventory } from 'src/inventory/entity/inventory.entity';

@ObjectType()
export class WareReGetDTO {
  @Field()
  id: string;
  @Field()
  qty: Number;
  @Field()
  date: string;
  @Field()
  inventory: Inventory;
}
