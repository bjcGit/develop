import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Account {
  @Field(() => String)
  _id: string;

  @Field(() => Int, {nullable:true})
  ID: Number;

  @Field()
  FIRST_NAME: string;

  @Field()
  LAST_NAME: string;

  @Field()
  USERNAME: string;

  @Field()
  COMPANY: string;

  @Field()
  CREATED_DATE: string;

  @Field()
  UPDATE_TS: Date;
}
