import { Field, InputType } from "@nestjs/graphql";
import { Column } from "typeorm";

@InputType()
export class PrototypeCreateDTO {
  @Field()
  @Column()
  id: string;
  @Field()
  @Column()
  name: string;
  @Field()
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
}
