import { Injectable } from '@nestjs/common';
import { ClosedTicketsRepository } from './repsitories/closed-tickets.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Tickets } from 'src/tickets/entities/tickets.entities';
import { Repository } from 'typeorm/repository/Repository';
import { Equal } from 'typeorm';

@Injectable()
export class ClosedTicketsService {
    constructor(
        @InjectRepository(Tickets)
        private readonly closedTicketsService: Repository<Tickets>){}

    getTicketsByStatus(status: string){
        return this.closedTicketsService.find({where: {
            status: Equal(status)
        }})
    }    
}
