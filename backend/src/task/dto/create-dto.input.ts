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
  avg_duration: Number;
  @Field()
  @Column()
  supervisor: string;
  @Field()
  @Column()
  induvidualOrUnit: Boolean;
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
  date: string;    
}
