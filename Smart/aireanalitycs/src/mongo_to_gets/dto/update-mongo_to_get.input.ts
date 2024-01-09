import { CreateMongoToGetInput } from './create-mongo_to_get.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMongoToGetInput extends PartialType(CreateMongoToGetInput) {
  @Field(() => Int)
  id: number;
}
