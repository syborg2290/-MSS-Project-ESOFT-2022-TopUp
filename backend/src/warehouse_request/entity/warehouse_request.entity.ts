import { Field, ObjectType } from '@nestjs/graphql';
import { Inventory } from 'src/inventory/entity/inventory.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class WarehouseRequest {
  @Field({ nullable: false })
  @PrimaryColumn({ unique: true, nullable: false })
  id: string;
  @Field()
  @Column({nullable:false})
  qty: Number;
  @ManyToOne(() => Inventory, (inve) => inve.warehouseRequests)
  inventory: Inventory;
  @Field()
  @Column({nullable:false})
  date: string;
}
