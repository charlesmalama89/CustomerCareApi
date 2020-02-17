import { Module } from '@nestjs/common';
import { ClosedTicketsService } from './closed-tickets.service';
import { ClosedTicketsController } from './closed-tickets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tickets } from 'src/tickets/entities/tickets.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Tickets])],
  providers: [ClosedTicketsService],
  controllers: [ClosedTicketsController]
})
export class ClosedTicketsModule {}
