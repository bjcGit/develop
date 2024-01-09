import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActieconBkModule } from './actiecon_bk/actiecon_bk.module';
import { ACTIECONBK } from './actiecon_bk/entities/actiecon_bk.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoToGetsModule } from './mongo_to_gets/mongo_to_gets.module';
import { VwEstapowerRecuadoModule } from './vw_estapower_recuado/vw_estapower_recuado.module';
import { VW_ESTAPOWER_RECAUDO } from './vw_estapower_recuado/dto/entities/estapower';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault({ footer: false })
      ]
    }),
    TypeOrmModule.forRoot({
      type: 'oracle',
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      synchronize: false,
      autoLoadEntities: true,
      extra:{
        connectString: process.env.DB_CONNECTSTRING
      },
      entities: [       
        ACTIECONBK,
        VW_ESTAPOWER_RECAUDO
      ]
    }),
    MongooseModule.forRoot(process.env.DB_MONGO_CONNECT),
    ActieconBkModule,
    MongoToGetsModule,
    VwEstapowerRecuadoModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule{}