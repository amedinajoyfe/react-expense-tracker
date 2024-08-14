import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Movement } from './movements.entity';

@Injectable()
export class MovementsRepository{
  constructor( @InjectRepository(Movement) private movementsRepository: Repository<Movement>){}

  async getAllMovements(): Promise<Movement[]>{
    return this.movementsRepository.find();
  }

  async getMovementById(id: string): Promise<Movement[]>{
    return this.movementsRepository.find({ where: { id } });
  }

  async getMovementsByUserId(userid: string): Promise<Movement[]>{
    return this.movementsRepository.find({ where: { userid } });
  }

  async addNewMovement(newMovement: Movement): Promise<Movement>{
    return this.movementsRepository.save(newMovement);
  }
}