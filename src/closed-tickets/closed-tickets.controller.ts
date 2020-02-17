import { Controller, Get, Param } from '@nestjs/common';
import { ClosedTicketsService } from './closed-tickets.service';

@Controller('closed-tickets')
export class ClosedTicketsController {
    constructor(private readonly closedTicketsService: ClosedTicketsService){}

    @Get(':status')
    fetchTicketsByStatus(@Param('status') status: string){
        return this.closedTicketsService.getTicketsByStatus(status);
    }
}
