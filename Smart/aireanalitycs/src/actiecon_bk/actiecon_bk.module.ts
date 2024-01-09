import { Module } from '@nestjs/common';
import { ActieconBkService } from './actiecon_bk.service';
import { ActieconBkResolver } from './actiecon_bk.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ACTIECONBK } from './entities/actiecon_bk.entity';
import { MongoDBService } from './mondoDB.service';
import { MongoToGetsModule } from 'src/mongo_to_gets/mongo_to_gets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Actiecon_bkSchema } from 'src/mongo_to_gets/entities/actiecon_bk.model';

@Module({
  providers: [
    ActieconBkResolver, 
    ActieconBkService,
    MongoDBService,
    MongoToGetsModule
  ],
  imports:[
    TypeOrmModule.forFeature([ACTIECONBK]),
    MongooseModule.forFeature([{name:'Actiecon_bk', schema: Actiecon_bkSchema}])
  ],
  exports:[
    TypeOrmModule,
    ActieconBkService,
    MongooseModule
  ]
})
export class ActieconBkModule {}
