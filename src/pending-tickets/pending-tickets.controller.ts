import { Controller, Get, Param } from '@nestjs/common';
import { PendingTicketsService } from './pending-tickets.service';

@Controller('pending-tickets')
export class PendingTicketsController {
    constructor(private readonly pendingTicketsService: PendingTicketsService){}

    @Get()
    fetchTicketsByStatus(){
        return this.pendingTicketsService.getTicketsByStatus();
    }

    @Get(':id')
    fetchAssignedTickets(@Param('id') id: number){
        return this.pendingTicketsService.getAssignedTicketsById(id);
    }
}
