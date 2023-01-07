import { Field, ObjectType } from '@nestjs/graphql';
import { Material } from 'src/material/entity/material.entity';

@ObjectType()
export class InvenMaterialGetDTO {
  @Field()
  id: string;
  @Field()
  unit: string;
  @Field()
  qty: number;
  @Field()
  material: Material;
}
