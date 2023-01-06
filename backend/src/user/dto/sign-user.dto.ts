import { HttpStatus } from '@nestjs/common';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TokenGetDTO {
  @Field()
  status: HttpStatus;
  @Field()
  message: string;
  @Field({ nullable: true })
  token: string;
}
