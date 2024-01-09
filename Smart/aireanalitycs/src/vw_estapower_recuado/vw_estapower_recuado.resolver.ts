import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { VwEstapowerRecuadoService } from './vw_estapower_recuado.service';
import { VW_ESTAPOWER_RECAUDO } from './dto/entities/estapower';
import { MongoDBService } from './vw-estapower-mongodb.service';

@Resolver(()=>VW_ESTAPOWER_RECAUDO)
export class VwEstapowerRecuadoResolver {
  constructor(
      private readonly vwEstapowerRecuadoService: VwEstapowerRecuadoService,
      private readonly mongodbService: MongoDBService
    ) {}

  @Query(()=> [VW_ESTAPOWER_RECAUDO],  {name:'Get_Oracle'})
  async findAllOracle(): Promise<VW_ESTAPOWER_RECAUDO[]>{
    try {
      const dataResult = await this.vwEstapowerRecuadoService.findAllOracle();     
      return dataResult
    } catch (error) {
      console.log(error, 'No se puedo traer la data')
      throw new Error('Error al obtener los datos')
    }
  }

  
  @Mutation(() => String, { name: 'TRANSFE_VALI_RECAUDO' })
  async transferDataValidate(): Promise<string> {
    try {

      const oracleData = await this.vwEstapowerRecuadoService.findAllOracle();
    
      await this.mongodbService.validateDataToMongoDB(oracleData);

      return 'Datos almacenados correctamente';
    } catch (error) {
      console.error('Error al transferir datos:', error);
      throw new Error('Error al transferir datos a MongoDB.');
    }
  }
  @Mutation(() => String, { name: 'TRANSFE_RECAUDO' })
  async transferData(): Promise<string> {
    try {

      const oracleData = await this.vwEstapowerRecuadoService.findAllOracle();
      console.log(oracleData)

      await this.mongodbService.saveDataToMongoDB(oracleData);

      return 'Datos almacenados correctamente';
    } catch (error) {
      console.error('Error al transferir datos:', error);
      throw new Error('Error al transferir datos a MongoDB.');
    }
  }
}
