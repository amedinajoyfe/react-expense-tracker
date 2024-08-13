import { Repository } from 'typeorm';
import { Movement } from './movements.entity';
export declare class MovementsRepository {
    private readonly repository;
    constructor(repository: Repository<Movement>);
    getMovementsByUserId(userid: string): Promise<Movement[]>;
    getMovementById(id: string): Promise<Movement[]>;
    getAllMovements(): Promise<Movement[]>;
    addNewMovement(newMovement: Movement): Promise<Movement>;
}
