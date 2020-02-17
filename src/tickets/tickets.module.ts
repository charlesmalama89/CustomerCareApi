import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { Tickets } from './entities/tickets.entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule, HandlebarsAdapter } from '@nest-modules/mailer';

@Module({
  imports: [TypeOrmModule.forFeature([Tickets]),MailerModule.forRoot({
    transport: 'smtps://charlesmalama89@gmail.com:hoklcfezzonadrtn@smtp.gmail.com',
    defaults: {
      from:'"nest-modules" <modules@nestjs.com>',
    },
    template: {
      dir: __dirname + '/templates',
      adapter: new HandlebarsAdapter(), // or new PugAdapter()
      options: {
        strict: true,
      },
    },
  }),],
  providers: [TicketsService],
  controllers: [TicketsController]
})
export class TicketsModule {}
