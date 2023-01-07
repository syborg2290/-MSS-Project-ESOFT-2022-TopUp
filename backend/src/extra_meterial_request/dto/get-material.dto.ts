import { Field, ObjectType } from '@nestjs/graphql';
import { Material } from 'src/material/entity/material.entity';
import { Task } from 'src/task/entity/task.entity';

@ObjectType()
export class ExMaterialGetDTO {
  @Field()
  id: string;
  @Field()
  task: Task;
  @Field()
  material: Material;
  @Field()
  qty: number;
  @Field()
  date: string;
}
