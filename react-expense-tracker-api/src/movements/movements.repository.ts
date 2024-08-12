import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Movement } from './movements.entity';

@Injectable()
export class MovementsRepository {
  constructor(
    @InjectRepository(Movement)
    private readonly repository: Repository<Movement>,
  ) {}

  async getMovementsByUserId(userid: string): Promise<Movement[]> {
    return this.repository.find({where: {userid}});
  }

  async getAllMovements(): Promise<Movement[]> {
    return this.repository.find();
  }
}