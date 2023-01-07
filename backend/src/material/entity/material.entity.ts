import { Field, ObjectType } from '@nestjs/graphql';
import { ExtraMaterial } from 'src/extra_meterial_request/entity/extra_meterial.entity';
import { Inventory } from 'src/inventory/entity/inventory.entity';
import { WarehouseInventory } from 'src/warehouse/entity/warehouse.enity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Material {
  @Field({ nullable: false })
  @PrimaryColumn({ unique: true, nullable: false })
  id: string;
  @Field({ nullable: false })
  @Column()
  name: string;
  @Field()
  @Column()
  description: string;
  @Field({ nullable: false })
  @Column()
  measurement_unit: string;
  @Field()
  @Column()
  cost_pre_unit: Number;
  @OneToMany(() => ExtraMaterial, (exMat) => exMat.material)
  extra_meterials: ExtraMaterial[];
  @OneToMany(() => Inventory, (inven) => inven.material)
  inventory: Inventory[];
  @OneToMany(() => WarehouseInventory, (inven) => inven.material)
  warehouseInventory: WarehouseInventory[];
}
