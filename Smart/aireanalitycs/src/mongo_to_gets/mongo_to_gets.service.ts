import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AccountDocument } from './entities/account.model';
import { InjectModel } from '@nestjs/mongoose';
import { Actiecon_bkDocument } from './entities/actiecon_bk.model';


@Injectable()
export class MongoToGetsService {

  constructor(
    @InjectModel('Account') private readonly accountModel: Model<AccountDocument>,
    @InjectModel('Actiecon_bk') private readonly Actiecon_bkModel: Model<Actiecon_bkDocument>
  ) { }

  async findAllAccounts(): Promise<AccountDocument[]> {
    return this.accountModel.find().exec();
  }

  async findAllActiecon_bk(): Promise<Actiecon_bkDocument[]> {
    return this.Actiecon_bkModel.find().exec();
  }

}
