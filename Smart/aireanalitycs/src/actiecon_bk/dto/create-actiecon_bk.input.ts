import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateActieconBkInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
