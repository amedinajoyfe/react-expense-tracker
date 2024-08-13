import { MovementsService } from './movements.service';
import { CreateMovementDto } from './create.movement.dto';
export declare class MovementsController {
    private readonly movementsService;
    constructor(movementsService: MovementsService);
    findAll(): Promise<import("./movements.entity").Movement[]>;
    getMovementsByUserId(userid: string): Promise<import("./movements.entity").Movement[]>;
    getMovementById(id: string): Promise<import("./movements.entity").Movement[]>;
    addNewMovement(newMovement: CreateMovementDto): Promise<import("./movements.entity").Movement>;
}
