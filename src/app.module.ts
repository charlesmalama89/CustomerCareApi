import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tickets } from './tickets/entities/tickets.entities';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';
import { DepartmentsModule } from './departments/departments.module';
import { Departments } from './departments/entities/departments.entity';
import { PendingTicketsModule } from './pending-tickets/pending-tickets.module';
import { ClosedTicketsModule } from './closed-tickets/closed-tickets.module';
import { OverDueTicketsModule } from './over-due-tickets/over-due-tickets.module';
import { AuthModule } from './auth/auth.module';
import { Users } from './auth/user.entity';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '104.248.247.78',
      port: 3306,
      username: 'root',
      password: '@#1h0bb170n',
      database: 'hobbiton_hob_data',
      entities: [Tickets, Users, Product, Departments],// [Tickets,Product,Departments,  Users],
      synchronize: false,
      logging: true,
    }),
    MailerModule.forRoot({
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
    }),
    TicketsModule,
    ProductsModule,
    DepartmentsModule,
    PendingTicketsModule,
    ClosedTicketsModule,
    OverDueTicketsModule,
    AuthModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
