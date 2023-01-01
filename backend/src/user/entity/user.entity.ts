import { Field, ObjectType } from '@nestjs/graphql';
import { Employee } from '../../employee/entity/employee.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @Field({ nullable: false })
  @PrimaryColumn({ unique: true, nullable: false })
  id: string;
  @Field({ nullable: false })
  @Column({ unique: true })
  username: string;
  @Field({ nullable: false })
  @Column({ unique: true })
  email: string;

  @OneToOne(() => Employee)
  @JoinColumn()
  emaployee: Employee;
}
