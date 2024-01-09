import { Module } from '@nestjs/common';
import { VwEstapowerRecuadoService } from './vw_estapower_recuado.service';
import { VwEstapowerRecuadoResolver } from './vw_estapower_recuado.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VW_ESTAPOWER_RECAUDO } from './dto/entities/estapower';
import { Recaudos_Schema } from './dto/entities/to_mongo.model';
import { MongoDBService } from './vw-estapower-mongodb.service';

@Module({
  providers: [
    VwEstapowerRecuadoResolver, 
    VwEstapowerRecuadoService,
    MongoDBService
  ],
  imports:[
    TypeOrmModule.forFeature([VW_ESTAPOWER_RECAUDO]),
    MongooseModule.forFeature([{name:'Recaudo', schema: Recaudos_Schema}]),
  ],
  exports: [
    MongooseModule,
    VwEstapowerRecuadoService
  ]
})
export class VwEstapowerRecuadoModule {}
