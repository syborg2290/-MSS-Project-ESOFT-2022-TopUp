import { Field, ObjectType } from '@nestjs/graphql';
import { Task } from 'src/task/entity/task.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Employee {
  @Field({ nullable: false })
  @PrimaryColumn({ unique: true, nullable: false })
  id: string;
  @Field({ nullable: false })
  @Column({ unique: true })
  nic: string;
  @Field({ nullable: false })
  @Column()
  firstName: string;
  @Field({ nullable: false })
  @Column()
  middleName: string;
  @Field({ nullable: false })
  @Column()
  lastName: string;
  @Field({ nullable: false })
  @Column({ unique: true })
  email: string;
  @Field({ nullable: false })
  @Column()
  gender: string;
  @Field({ nullable: false })
  @Column()
  dob: string;
  @Field({ nullable: false })
  @Column()
  dateOfJoining: string;
  @Field({ nullable: false })
  @Column()
  terminatedDate: string;
  @Field({ nullable: false, defaultValue: false })
  @Column()
  deleted: boolean;
  @Field({ nullable: false })
  @Column({ unique: true })
  contactNo: string;
  @Field({ nullable: false })
  @Column()
  leaves: number;
  @Field()
  @Column()
  department: string;
  @Field({ nullable: false })
  @Column()
  position: string;
  @Field({ nullable: false })
  @Column()
  role: string;
  @Field({ nullable: false })
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  salary: number;
  @Field({ nullable: false })
  @Column()
  emergencyContactNo: string;
  @Field({ nullable: false })
  @Column()
  address: string;
  @OneToMany(() => Task, (task) => task.employee)
  tasks: Task[];
}
