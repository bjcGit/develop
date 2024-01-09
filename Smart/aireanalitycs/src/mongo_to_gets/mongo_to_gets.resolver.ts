import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MongoToGetsService } from './mongo_to_gets.service';
import { Account } from './entities/mongo_to_get.entity';
import { AccountDocument } from './entities/account.model';
import { ActieconBk_entitie } from './entities/actiecon_bk';
import { Actiecon_bkDocument } from './entities/actiecon_bk.model';


@Resolver(() => Account)
export class MongoToGetsResolver {
  constructor(private readonly mongoToGetsService: MongoToGetsService) { }

  @Query(() => [Account], { name: 'ALLACCOUNTS' })
  async findAllAccounts(): Promise<AccountDocument[]> {
    return this.mongoToGetsService.findAllAccounts();
  }

  @Query(() => [ActieconBk_entitie], { name: 'ACTIECON_BK_MONGO' })
  async findAllActiecon_bk(): Promise<Actiecon_bkDocument[]> {
    return this.mongoToGetsService.findAllActiecon_bk();
  }
}
