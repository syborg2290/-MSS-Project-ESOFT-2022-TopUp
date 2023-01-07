import { Field, ObjectType } from "@nestjs/graphql";
import { Material } from "src/material/entity/material.entity";

@ObjectType()
export class WarehouseInventoryGetDTO {
  @Field()
  id: string;
  @Field()
  qty: Number;
  @Field()
  material: Material;
}
