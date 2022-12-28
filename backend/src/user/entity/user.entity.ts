import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @Field({ nullable: false })
  @PrimaryColumn({ unique: true, nullable: false })
  id: string;
  @Field({ nullable: false })
  @Column()
  username: string;
  @Field({ nullable: false })
  @Column()
  password: string;
  @Field({ nullable: false })
  @Column()
  level: string;
}
