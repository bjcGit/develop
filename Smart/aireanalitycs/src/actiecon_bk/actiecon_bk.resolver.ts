import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ActieconBkService } from './actiecon_bk.service';
import { ACTIECONBK } from './entities/actiecon_bk.entity';
import { MongoDBService } from './mondoDB.service';

@Resolver(() => ACTIECONBK)
export class ActieconBkResolver {
  constructor(
    private readonly actieconBkService: ActieconBkService,
    private readonly mongoService: MongoDBService,

  ) { }

  @Query(() => [ACTIECONBK], { name: 'ACTIECONBK_ALL' })
  async findAll(): Promise<ACTIECONBK[]> {
    try {
      const actie = await this.actieconBkService.findAll();
      return actie
    } catch (error) {
      console.error('Error al consultar datos:', error);
      throw new Error('Error al obtener datos');
    }
  }

  @Mutation(() => String, { name: 'TRANSFERENCIA_SIN_VALI' })
  async transferData(): Promise<string> {
    try {

      const oracleData = await this.actieconBkService.findAll();

      await this.mongoService.saveDataToMongoDB(oracleData);

      return 'Datos transferidos correctamente a MongoDB.';
    } catch (error) {
      console.error('Error al transferir datos:', error);
      throw new Error('Error al transferir datos a MongoDB.');
    }
  }

  @Mutation(() => String, { name: 'TRANSFE_VALI' })
  async transferDataValidate(): Promise<string> {
    try {

      const oracleData = await this.actieconBkService.findAll();

      await this.mongoService.validateDataToMongoDB(oracleData);

      return 'Datos almacenados correctamente';
    } catch (error) {
      console.error('Error al transferir datos:', error);
      throw new Error('Error al transferir datos a MongoDB.');
    }
  }

}
