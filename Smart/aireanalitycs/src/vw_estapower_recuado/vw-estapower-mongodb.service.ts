import { Injectable } from '@nestjs/common';
import { AccountDocument, AccountModel } from 'src/mongo_to_gets/entities/account.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VW_ESTAPOWER_RECAUDO } from './dto/entities/estapower';
import { RecaudosDocument } from './dto/entities/to_mongo.model';

@Injectable()
export class MongoDBService {

    constructor(
        @InjectModel('Recaudo')
        private readonly recaudosModel: Model<RecaudosDocument>
    ) { }

    async saveDataToMongoDB(data: VW_ESTAPOWER_RECAUDO[]): Promise<RecaudosDocument[]> {

        try {
            const mappedData = data.map((item) => ({
                TERCDESC: item.TERCDESC,
                ANIO: item.ANIO,
                MES: item.MES,
                MODPFEPA: item.MODPFEPA,
                HORAS: item.HORAS,
                MODPTIIM: item.MODPTIIM,
                MODPENFI: item.MODPENFI,
                ENFIDESC: item.ENFIDESC,
                VALOR: item.VALOR,
                TOTA_DESCTO: item.TOTA_DESCTO,
            }));
            const newDataToMongo = await this.recaudosModel.create(mappedData);
            return newDataToMongo;
        } catch (error) {
            console.log(error)
            throw new Error('Algo salio mal en el servicio de mongo')
        }
    }

    async validateDataToMongoDB(data: VW_ESTAPOWER_RECAUDO[]): Promise<RecaudosDocument[]> {
        try {
            const result = await Promise.all(data.map(async (item) => {
                const existingDocument = await this.recaudosModel.findOne({
                    TERCDESC: item.TERCDESC,
                    ANIO: item.ANIO,
                    MES: item.MES,
                    MODPFEPA: item.MODPFEPA,
                    HORAS: item.HORAS,
                    MODPTIIM: item.MODPTIIM,
                    MODPENFI: item.MODPENFI,
                    ENFIDESC: item.ENFIDESC,
                    VALOR: item.VALOR,
                    TOTA_DESCTO: item.TOTA_DESCTO,
                });

                if (existingDocument) {
                    // Actualizar el documento existente
                    return this.recaudosModel.updateOne({ _id: existingDocument._id }, { $set: item });
                } else {
                    // Crear un nuevo documento
                    return this.recaudosModel.create(item);
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
