import { Injectable } from '@nestjs/common';
import { MovementsRepository } from './movements.repository';
import { Movement } from './movements.entity';
import { CreateMovementDto } from './create.movement.dto';

@Injectable()
export class MovementsService {
  constructor(private readonly movementsRepository: MovementsRepository){}

  getMovementsByUserId(userid: string): Promise<Movement[]> {
    return this.movementsRepository.getMovementsByUserId(userid);
  }  

  getAllMovements(): Promise<Movement[]> {
    return this.movementsRepository.getAllMovements();
  }

  getMovementById(id: string): Promise<Movement[]> {
    return this.movementsRepository.getMovementById(id);
  }  

  async addNewMovement(newMovement: CreateMovementDto): Promise<Movement> {
    let movementToAdd = new Movement(newMovement.userid, newMovement.expense, newMovement.category, newMovement.amount);
    return this.movementsRepository.addNewMovement(movementToAdd);
  }
}
