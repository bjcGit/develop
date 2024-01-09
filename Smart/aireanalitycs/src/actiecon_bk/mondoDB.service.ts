import { Injectable } from '@nestjs/common';
import { ACTIECONBK } from './entities/actiecon_bk.entity';
import { AccountDocument, AccountModel } from 'src/mongo_to_gets/entities/account.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Actiecon_bkDocument, Actiecon_bkModel, Actiecon_bkSchema } from 'src/mongo_to_gets/entities/actiecon_bk.model';

@Injectable()
export class MongoDBService {

  constructor(
    @InjectModel('Actiecon_bk')
    private readonly atieconBkModel: Model<Actiecon_bkDocument>
  ) { }

  async saveDataToMongoDB(data: ACTIECONBK[]): Promise<Actiecon_bkDocument[]> {

    try {
      const mappedData = data.map((item) => ({
        ACECTIAC: item.ACECTIAC,
        ACECACTI: item.ACECACTI,
        ACECDESC: item.ACECDESC,
        ACECUNID: item.ACECUNID,
        ACECVERS: item.ACECVERS,
      }));
      const newDataToMongo = await this.atieconBkModel.create(mappedData);
      return newDataToMongo;
    } catch (error) {
      console.log(error)
      throw new Error('Algo salio mal en el servicio de mongo')
    }
  }

  async validateDataToMongoDB(data: ACTIECONBK[]): Promise<Actiecon_bkDocument[]> {
    try {
      const result = await Promise.all(data.map(async (item) => {
        const existingDocument = await this.atieconBkModel.findOne({ 
          ACECTIAC: item.ACECTIAC, 
          ACECACTI: item.ACECACTI,
          ACECDESC: item.ACECDESC,
          ACECUNID: item.ACECUNID,
          ACECVERS: item.ACECVERS,
        });
  
        if (existingDocument) {
          // Actualizar el documento existente
          return this.atieconBkModel.updateOne({ _id: existingDocument._id }, { $set: item });
        } else {
          // Crear un nuevo documento
          return this.atieconBkModel.create(item);
        }
      }));
      result
      return 
    } catch (error) {
      console.log(error);
      throw new Error('Algo salió mal en el servicio de MongoDB');
    }
  }
  
  async findAllMongo(): Promise<AccountDocument[]> {
    return AccountModel.find().exec();
  }
}
