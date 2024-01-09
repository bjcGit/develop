import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VW_ESTAPOWER_RECAUDO } from './dto/entities/estapower';


@Injectable()
export class VwEstapowerRecuadoService {
  constructor(
    @InjectRepository(VW_ESTAPOWER_RECAUDO)
    private VW_ESTAPOWER_RECAUDORepository:Repository<VW_ESTAPOWER_RECAUDO>
  ){}
 
  // async findAllOracle():Promise<VW_ESTAPOWER_RECAUDO[]> {

  //   const dataOracle = await this.VW_ESTAPOWER_RECAUDORepository.find();
  //   const dataTransformed = dataOracle.map((item) => ({
  //     ...item,
  //     MODPFEPA: new Date(item.MODPFEPA)
  //   }));
  //   return dataTransformed;
  // }

  async findAllOracle():Promise<VW_ESTAPOWER_RECAUDO[]> {
  
      return this.VW_ESTAPOWER_RECAUDORepository.find()
  }

}