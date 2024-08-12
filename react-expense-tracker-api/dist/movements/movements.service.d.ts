import { MovementsRepository } from './movements.repository';
export declare class MovementsService {
    private readonly movementsRepository;
    constructor(movementsRepository: MovementsRepository);
    getMovementsByUserId(userid: string): {};
    getAllMovements(): {};
}
