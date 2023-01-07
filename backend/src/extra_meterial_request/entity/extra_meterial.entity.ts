import { Field, ObjectType } from '@nestjs/graphql';
import { Material } from 'src/material/entity/material.entity';
import { Task } from 'src/task/entity/task.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class ExtraMaterial {
  @Field({ nullable: false })
  @PrimaryColumn({ unique: true, nullable: false })
  id: string;
  @ManyToOne(() => Task, (task) => task.extra_meterial)
  task: Task;
  @ManyToOne(() => Material, (material) => material.extra_meterials)
  material: Material;
  @Field()
  @Column({ nullable: false })
  qty: number;
  @Field()
  @Column({ nullable: false })
  date: string;
}
