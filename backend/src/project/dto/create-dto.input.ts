import { Field, InputType } from "@nestjs/graphql";
import { Column } from "typeorm";

@InputType()
export class ProjectCreateDTO {
  @Field()
  @Column()
  id: string;
  @Field()
  @Column()
  title: string;
  @Field()
  @Column()
  factory: string;
  @Field()
  @Column()
  description: string;
  @Field()
  @Column()
  client: string;
  @Field()
  @Column()
  estimation_budget: Number; 
  @Field()
  @Column()
  estimation_duration: Number;
  @Field()
  @Column()
  duration_unit: string;
  @Field()
  @Column()
  starting_date: string;    
}
