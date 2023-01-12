import { Field, ObjectType } from '@nestjs/graphql';
import { Material } from 'src/material/entity/material.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class WarehouseInventory {
  @Field({ nullable: false })
  @PrimaryColumn({ unique: true, nullable: false })
  id: string;
  @Field()
  @Column()
  qty: number;
  @ManyToOne(() => Material, (mat) => mat.warehouseInventory)
  material: Material;
}
