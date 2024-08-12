import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovementsController } from './movements.controller';
import { MovementsService } from './movements.service';
import { MovementsRepository } from './movements.repository';
import { Movement } from './movements.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movement])],
  controllers: [MovementsController],
  providers: [MovementsService, MovementsRepository],
})
export class MovementsModule {}
