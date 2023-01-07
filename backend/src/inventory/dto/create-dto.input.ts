import { Field, InputType } from "@nestjs/graphql";
import { Column } from "typeorm";

@InputType()
export class InventoryCreateDTO {
  @Field()
  @Column()
  id: string;
  @Field()
  @Column()
  unit: string;
  @Field()
  @Column()
  qty: number;
  @Field()
  @Column()
  material: string;  
}
