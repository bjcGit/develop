import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ACTIECONBK } from './entities/actiecon_bk.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActieconBkService {
  constructor(
    @InjectRepository(ACTIECONBK)
    private actieconbkRepository:Repository<ACTIECONBK>
  ){}
 
  async findAll():Promise<ACTIECONBK[]> {
    return this.actieconbkRepository.find()
  }

}
