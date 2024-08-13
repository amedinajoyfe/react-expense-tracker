import { MovementsRepository } from './movements.repository';
import { Movement } from './movements.entity';
import { CreateMovementDto } from './create.movement.dto';
export declare class MovementsService {
    private readonly movementsRepository;
    constructor(movementsRepository: MovementsRepository);
    getMovementsByUserId(userid: string): Promise<Movement[]>;
    getAllMovements(): Promise<Movement[]>;
    getMovementById(id: string): Promise<Movement[]>;
    addNewMovement(newMovement: CreateMovementDto): Promise<Movement>;
}
