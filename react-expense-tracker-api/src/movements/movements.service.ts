import { Injectable } from '@nestjs/common';
import { MovementsRepository } from './movements.repository';

@Injectable()
export class MovementsService {
  constructor(private readonly movementsRepository: MovementsRepository){}

  getMovementsByUserId(userid: string): {} {
    return this.movementsRepository.getMovementsByUserId(userid);
  }  

  getAllMovements(): {} {
    return this.movementsRepository.getAllMovements();
  }
}
