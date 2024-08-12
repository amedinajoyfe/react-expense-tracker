import { MovementsService } from './movements.service';
export declare class MovementsController {
    private readonly movementsService;
    constructor(movementsService: MovementsService);
    findAll(): {};
    getMovementsByUserId(userid: string): {};
}
