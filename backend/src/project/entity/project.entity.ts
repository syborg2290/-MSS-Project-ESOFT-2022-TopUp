import { Field, ObjectType } from '@nestjs/graphql';
import { Task } from 'src/task/entity/task.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Project {
  @Field({ nullable: false })
  @PrimaryColumn({ unique: true, nullable: false })
  id: string;
  @Field()
  @Column({ nullable: false })
  title: string;
  @Field()
  @Column()
  factory: string;
  @Field()
  @Column()
  description: string;
  @Field()
  @Column({ nullable: false })
  client: string;
  @Field()
  @Column({ nullable: false })
  estimation_budget: Number;
  @Field()
  @Column({ nullable: false })
  estimation_duration: Number;
  @Field()
  @Column({ nullable: false })
  duration_unit: string;
  @Field()
  @Column({ nullable: false })
  starting_date: string;
  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];
}
