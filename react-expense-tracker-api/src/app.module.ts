import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MovementsModule } from './movements/movements.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'expensetracker',
      autoLoadEntities: true,
      synchronize: false,
    }),
    UsersModule,
    MovementsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
