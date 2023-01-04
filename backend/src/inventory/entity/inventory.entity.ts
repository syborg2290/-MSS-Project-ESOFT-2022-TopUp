import { Field, ObjectType } from '@nestjs/graphql';
import { Material } from 'src/material/entity/material.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

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
  qty: Number;
  @OneToOne(() => Material)
  @JoinColumn()
  material: Material;
}
