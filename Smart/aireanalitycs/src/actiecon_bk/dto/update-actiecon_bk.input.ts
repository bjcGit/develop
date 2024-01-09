import { CreateActieconBkInput } from './create-actiecon_bk.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateActieconBkInput extends PartialType(CreateActieconBkInput) {
  @Field(() => Int)
  id: number;
}
