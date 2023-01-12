import { Field, InputType } from "@nestjs/graphql";
import { Column } from "typeorm";

@InputType()
export class TaskCreateDTO {
  @Field()
  @Column()
  id: string;
  @Field()
  @Column()
  title: string;
  @Field()
  @Column()
  description: string;
  @Field()
  @Column()
  taskstatus: string;
  @Field()
  @Column()
  progress: number;
  @Field()
  @Column()
  supervisor: string;
  @Field()
  @Column()
  induvidualOrUnit: string;
  @Field()
  @Column()
  project: string;
  @Field()
  @Column()
  unit: string;
  @Field()
  @Column()
  employee: string;
  @Field()
  @Column()
  prototype: string;
  @Field()
  @Column()
  start_time: string;
  @Field()
  @Column()
  finished_time: string;     
}
