import { Field, InputType } from "@nestjs/graphql";
import { Column } from "typeorm";

@InputType()
export class UnitCreateDTO {
  @Field()
  @Column()
  id: string;
  @Field()
  @Column()
  code: string;
  @Field()
  @Column()
  department: string;
}
