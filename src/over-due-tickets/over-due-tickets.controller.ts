import { Controller, Get, Param } from '@nestjs/common';
import { TicketsService } from 'src/tickets/tickets.service';
import { OverDueTicketsService } from './over-due-tickets.service';

@Controller('over-due-tickets')
export class OverDueTicketsController {
    constructor(private readonly overDueTicketsService: OverDueTicketsService){}

    @Get()
    async fetchOverDueTickets(){
        return await this.overDueTicketsService.getOverDueTickets();
    }
}
