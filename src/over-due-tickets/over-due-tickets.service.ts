import { Injectable, Logger, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tickets } from 'src/tickets/entities/tickets.entities';
import { Repository, Any, LessThan, Equal } from 'typeorm';
import * as moment from 'moment'

@Injectable()
export class OverDueTicketsService {

    constructor(
        @InjectRepository(Tickets)
        private readonly overDueTicketsService: Repository<Tickets>
        
    ){}

    async getOverDueTickets(){
        const date = moment().subtract(2, 'days').format('YYYY-MM-DD HH:MM:SS');
        Logger.log(`${date}`, 'OverDueService');

        return await this.overDueTicketsService.find({where: {
            createdOn: LessThan(date),
            status: Equal('Pending')
        }})
    }
}
