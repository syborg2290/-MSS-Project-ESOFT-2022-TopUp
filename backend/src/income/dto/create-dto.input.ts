import { Field, InputType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class IncomeCreateDTO {
  @Field()
  @Column()
  id: string;
  @Field()
  @Column()
  factory: string;
  @Field()
  @Column()
  month: string;
  @Field()
  @Column()
  year: string;
  @Field()
  @Column()
  income: Number;
  @Field()
  @Column()
  cost: Number;
  @Field()
  @Column()
  status: string;
  @Field()
  @Column()
  generated_date: string;
}
