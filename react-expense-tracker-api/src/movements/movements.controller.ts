import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { MovementsService } from './movements.service';
import { CreateMovementDto } from './create.movement.dto';

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

  @Get(":id")
  getMovementById(@Param('id') id: string) {
    return this.movementsService.getMovementsByUserId(id);
  }

  @Post()
  addNewMovement(@Body() newMovement: CreateMovementDto){
    return this.movementsService.addNewMovement(newMovement);
  }
}