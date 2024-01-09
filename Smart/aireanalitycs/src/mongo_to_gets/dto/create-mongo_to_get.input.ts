import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMongoToGetInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
