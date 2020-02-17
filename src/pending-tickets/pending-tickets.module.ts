import { Module } from '@nestjs/common';
import { PendingTicketsService } from './pending-tickets.service';
import { PendingTicketsController } from './pending-tickets.controller';
import { Tickets } from './entities/pending-tickets.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PendingTicketsRepository } from './repositories/pending-tickets.repository';
import { UserService } from 'src/auth/user.service';
import { AuthModule } from 'src/auth/auth.module';
import { Users } from 'src/auth/user.entity';
import { UserRepository } from 'src/auth/user.repository';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Tickets, PendingTicketsRepository])],
  providers: [PendingTicketsService],
  controllers: [PendingTicketsController]
})
export class PendingTicketsModule {}
