import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ActieconBk_entitie {
  @Field(() => String)
  _id: string;

  @Field(() => String, {nullable:true})
  ACECTIAC: string;

  @Field(() => String)
  ACECACTI: string;

  @Field(() => String)
  ACECDESC: string;

  @Field(() => String)
  ACECUNID: string;

  @Field(()=>Number)
  ACECVERS: number;
}
