import { Field, InputType } from "@nestjs/graphql";
import { Column } from "typeorm";

@InputType()
export class EmployeeCreateDTO {
  @Field()
  @Column()
  id: string;
  @Field()
  @Column()
  nic: string;
  @Field()
  @Column()
  firstName: string;
  @Field()
  @Column()
  middleName: string;
  @Field()
  @Column()
  lastName: string;
  @Field()
  @Column()
  nationality: string;
  @Field()
  @Column()
  email: string;
  @Field()
  @Column()
  gender: string;
  @Field()
  @Column()
  dob: string;
  @Field()
  @Column()
  dateOfJoining: string;
  @Field()
  @Column()
  terminatedDate: string;
  @Field()
  @Column()
  deleted: boolean;
  @Field()
  @Column()
  contactNo: string;
  @Field()
  @Column()
  leaves: number;
  @Field()
  @Column()
  getLeaves: number;
  @Field()
  @Column()
  department: string;
  @Field()
  @Column()
  position: string;
  @Field()
  @Column()
  salary: number;
  @Field()
  @Column()
  emergencyContactNo: string;
  @Field()
  @Column()
  address: string;
}
