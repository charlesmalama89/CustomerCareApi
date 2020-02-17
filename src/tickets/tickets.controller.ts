import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { ticketsDTO } from './dto/tickets.dto';
import { commentDTO } from './dto/coment.dto';

@Controller('tickets')
export class TicketsController {
    constructor(private readonly ticketsService: TicketsService){}

    
    @Post()
    addTicket(@Body() ticket: ticketsDTO){
        return this.ticketsService.openTicket(ticket);
    }

    @Get()
    fetchTickets(){
        return this.ticketsService.getAllTickets();
    }

    // @Get(':id')
    // fetchTicketById(@Param('id') id: number){
    //     return this.ticketsService.getTicketById(id);
    // }

    @Get(':status')
    fetchTicketsByStatus(@Param('status') status: string){
        return this.ticketsService.getTicketsByStatus(status);
    }


    @Patch(':id')
    updateTicket(@Param('id') id: number, @Body() ticket: ticketsDTO ){
       return this.ticketsService.updateTicketComment(id, ticket);
    } 
}
