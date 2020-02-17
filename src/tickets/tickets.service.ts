import { Injectable, Logger } from '@nestjs/common';
import { Repository, Equal } from 'typeorm';
import { Tickets } from './entities/tickets.entities';
import { InjectRepository } from '@nestjs/typeorm';
import { ticketsDTO } from './dto/tickets.dto';
import { commentDTO } from './dto/coment.dto';
import * as moment from 'moment'
import { UserService } from 'src/auth/user.service';
import { MailerService } from '@nest-modules/mailer';

@Injectable()
export class TicketsService {
    toEmail = '';
    
    constructor(
        @InjectRepository(Tickets)
        private readonly ticketsRepository: Repository<Tickets>,
        private readonly mailerService: MailerService
        ){}

    async openTicket(ticket: ticketsDTO): Promise<Tickets>{

        const ticketNumber = Math.floor(Math.random() * (100000 - 1000 + 1) + 1000);
        ticket.ticketNum = ticketNumber;
        ticket.status = 'Pending';
        ticket.createdOn = moment().format('YYYY-MM-DD HH:MM:SS');
        ticket.updatedOn = moment().format('YYYY-MM-DD HH:MM:SS');
        console.log(ticket);
        
        const createTicket = this.ticketsRepository.create(ticket);

        console.log(createTicket);

        const department = ticket.department;
        if(department === 'ICT'){
            this.toEmail = 'tech@hobbiton.co.zm';
        }else if(department === 'Human Resources'){
            this.toEmail = 'invest@hobbiton.co.zm';
        }else if(department === 'Finance'){
            this.toEmail = 'finance@hobbiton.co.zm ';
        }else if(department === 'Sales and Marketing'){
            this.toEmail = 'invest@hobbiton.co.zm';
        }else{
            this.toEmail = 'invest@hobbiton.co.zm';
        }
        this.SendEmail(this.toEmail);
        return await this.ticketsRepository.save(createTicket);
    }

    SendEmail(email: string) {
        this.mailerService.sendMail({
          to: email,
          from: 'charles.malama@hobbiton.co.zm',
          subject: 'CUSTOMER CARE QUERY',
          html: '<p> Hi Team, Testing Customer Care System </p>'
        })
        .then((res) => {
          console.log(res)
        })
        .catch(err => {
          console.log(err);
        })
      }


    
    getAllTickets(): Promise<Tickets[]>{
        return this.ticketsRepository.find();
    }

    getTicketById(id: number){
        return  this.ticketsRepository.find({where: {
            id: Equal(id)
        }});
    }

    getTicketsByStatus(status: string){
        return this.ticketsRepository.find({where: {
            status: Equal(status)
        }})
    }

     async updateTicketComment(id: number, ticket: ticketsDTO): Promise<Tickets>{
           console.log(ticket);
           
            let ticketInDb = await this.ticketsRepository.findOne(id);
            ticketInDb.status = 'Closed';
            ticketInDb.closeTicketComment = ticket.closeTicketComment;
            ticketInDb.closedBy = ticket.closedBy;

            return await this.ticketsRepository.save(ticketInDb)
            
            // ticketInDb = {
            //     ...ticket
            // }
            // const updatedTicket = await this.ticketsRepository.update()
            // ticketInDb.status = ''
           

    }

}
