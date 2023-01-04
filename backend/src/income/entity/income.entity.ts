import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Income {
  @Field({ nullable: false })
  @PrimaryColumn({ unique: true, nullable: false })
  id: string;
  @Field()
  @Column({ nullable: false })
  factory: string;
  @Field()
  @Column({ nullable: false })
  month: string;
  @Field()
  @Column({ nullable: false })
  year: string;
  @Field()
  @Column({ nullable: false })
  income: Number;
  @Field()
  @Column({ nullable: false })
  cost: Number;
  @Field()
  @Column({ nullable: false })
  status: string;
  @Field()
  @Column({ nullable: false })
  generated_date: string;
}
