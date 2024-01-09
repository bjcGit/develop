import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'VW_ESTAPOWER_RECAUDO' })
@ObjectType()
export class VW_ESTAPOWER_RECAUDO {

  @PrimaryColumn()
  @Field(() => String)
  TERCDESC: string;

  @PrimaryColumn()
  @Field(() => String, { nullable: true })
  ANIO: string;

  @PrimaryColumn()
  @Field(() => String, { nullable: true })
  MES: string;

  @PrimaryColumn()
  @Field(() => String)
  MODPFEPA: string;

  @PrimaryColumn()
  @Field(() => String, { nullable: true })
  HORAS: string;

  @PrimaryColumn()
  @Field(() => String)
  MODPTIIM: string;

  @PrimaryColumn()
  @Field(() => String, { nullable: true })
  MODPENFI: string;

  @PrimaryColumn()
  @Field(() => String)
  ENFIDESC: string;

  @PrimaryColumn()
  @Field(() => Number, { nullable: true })
  VALOR: number;

  @PrimaryColumn()
  @Field(() => Number, { nullable: true })
  TOTA_DESCTO: number;
}
