import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ACTIECON_BK' })
@ObjectType()
export class ACTIECONBK  {

  @PrimaryColumn()
  @Field(() => String)
  ACECTIAC: string;

  @PrimaryColumn()
  @Field(()=> String)
  ACECACTI: string

  @Column()
  @Field(()=> String, {nullable: true})
  ACECDESC: string

  @Column()
  @Field(()=> String, {nullable: true})
  ACECUNID: string

  @Column()
  @Field(()=> Number, {nullable: true})
  ACECVERS: number

}
