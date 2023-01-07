import { Field, ObjectType } from '@nestjs/graphql';
import { Task } from 'src/task/entity/task.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Prototype {
  @Field({ nullable: false })
  @PrimaryColumn({ unique: true, nullable: false })
  id: string;
  @Field({ nullable: false })
  @Column({ unique: true })
  name: string;
  @Field({ nullable: false })
  @Column()
  avg_duration: Number;
  @Field()
  @Column()
  time_unit: string;
  @Field()
  @Column()
  avg_cost: Number;
  @Field()
  @Column()
  materials: string;    
  @OneToMany(() => Task, (task) => task.prototype)
  tasks: Task[];
}
