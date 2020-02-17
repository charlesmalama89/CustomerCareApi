import { Module } from '@nestjs/common';
import { OverDueTicketsService } from './over-due-tickets.service';
import { OverDueTicketsController } from './over-due-tickets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tickets } from 'src/tickets/entities/tickets.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Tickets])],
  providers: [OverDueTicketsService],
  controllers: [OverDueTicketsController]
})
export class OverDueTicketsModule {}
