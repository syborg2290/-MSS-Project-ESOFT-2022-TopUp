import { Field, InputType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class ExtraMaterialCreateDTO {
  @Field()
  @Column()
  id: string;
  @Field()
  @Column()
  task: string;
  @Field()
  @Column()
  material: string;
  @Field()
  @Column()
  qty: number;
  @Field()
  @Column()
  date: string;
}
