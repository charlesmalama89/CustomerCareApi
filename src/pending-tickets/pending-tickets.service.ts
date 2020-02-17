import { Injectable } from '@nestjs/common';
import { Repository, Equal } from 'typeorm';
import { Tickets } from './entities/pending-tickets.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/auth/user.service';
import { AuthService } from 'src/auth/auth.service';
import { PendingTicketsRepository } from './repositories/pending-tickets.repository';

@Injectable()
export class PendingTicketsService {
    constructor(
        @InjectRepository(Tickets)
        private readonly pendingTicketsService: PendingTicketsRepository,
        private readonly userService: UserService,
        // private readonly authService: AuthService,
        // private readonly service: PendingTicketsService
        ){}

        getTicketsByStatus(){
             return this.pendingTicketsService.find({where: {
                 status: Equal('Pending')
             }})
         }


        async getAssignedTicketsById(id: number){
            console.log(id);
            
          const dept_name = await this.userService.findUserDeatils(id);
         
          console.log(dept_name);
          
          return this.pendingTicketsService.find({where: {
            status: Equal('Pending'),
            department: dept_name
        }})
        }
        
         
      
}
