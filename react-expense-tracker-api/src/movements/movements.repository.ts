import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Movement } from './movements.entity';
import { CreateMovementDto } from './create.movement.dto';

@Injectable()
export class MovementsRepository {
  constructor(
    @InjectRepository(Movement)
    private readonly repository: Repository<Movement>,
  ) {}

  async getMovementsByUserId(userid: string): Promise<Movement[]> {
    return this.repository.find({where: {userid}});
  }

  async getMovementById(id: string): Promise<Movement[]> {
    return this.repository.find({where: {id}});
  }

  async getAllMovements(): Promise<Movement[]> {
    return this.repository.find();
  }

  async addNewMovement(newMovement: Movement): Promise<Movement> {
    return this.repository.save(newMovement);
  }
}