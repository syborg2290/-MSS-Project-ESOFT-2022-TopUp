import { Field, ObjectType } from '@nestjs/graphql';
import { Material } from 'src/material/entity/material.entity';
import { WarehouseRequest } from 'src/warehouse_request/entity/warehouse_request.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Inventory {
  @Field({ nullable: false })
  @PrimaryColumn({ unique: true, nullable: false })
  id: string;
  @Field()
  @Column({ nullable: false })
  unit: string;
  @Field()
  @Column()
  qty: number;
  @ManyToOne(() => Material, (mat) => mat.inventory)
  material: Material;
  @OneToMany(() => WarehouseRequest, (warehouseRe) => warehouseRe.inventory)
  warehouseRequests: WarehouseRequest[];
}
