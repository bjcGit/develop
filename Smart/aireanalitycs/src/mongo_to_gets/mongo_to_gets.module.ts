import { Module } from '@nestjs/common';
import { MongoToGetsService } from './mongo_to_gets.service';
import { MongoToGetsResolver } from './mongo_to_gets.resolver';
import { AccountSchema } from './entities/account.model';
import { MongooseModule } from '@nestjs/mongoose';
import { Actiecon_bkSchema } from './entities/actiecon_bk.model';

@Module({
  providers: [
    MongoToGetsResolver, 
    MongoToGetsService,    
  ],
  imports:[
    MongooseModule.forFeature([{name:'Account', schema: AccountSchema}]),
    MongooseModule.forFeature([{name:'Actiecon_bk', schema: Actiecon_bkSchema}])
  ],
  exports: [
    MongoToGetsService,
    MongooseModule
  ]
  
})
export class MongoToGetsModule {}
