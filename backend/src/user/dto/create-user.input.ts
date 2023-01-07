import { Field, InputType } from "@nestjs/graphql";
import { Column } from "typeorm";

@InputType()
export class UserCreateDTO {
  @Field()
  @Column()
  id: string;
  @Field()
  @Column()
  username: string;
  @Field()
  @Column()
  password: string;
  @Field()
  @Column()
  employeeId: string;
  @Field()
  @Column()
  role: string;
}
