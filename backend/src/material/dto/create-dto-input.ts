import { Field, InputType } from "@nestjs/graphql";
import { Column } from "typeorm";

@InputType()
export class MaterialCreateDTO {
  @Field()
  @Column()
  id: string;
  @Field()
  @Column()
  name: string;
  @Field()
  @Column()
  description: string;
  @Field()
  @Column()
  measurement_unit: string;
  @Field()
  @Column()
  cost_pre_unit: Number;  
}
