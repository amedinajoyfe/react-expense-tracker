import { Controller, Get, Param } from '@nestjs/common';
import { MovementsService } from './movements.service';

@Controller('movements')
export class MovementsController {
  constructor(private readonly movementsService: MovementsService){}

  @Get()
  findAll() {
    return this.movementsService.getAllMovements();
  }

  @Get(":userid")
  getMovementsByUserId(@Param('userid') userid: string) {
    return this.movementsService.getMovementsByUserId(userid);
  }
}