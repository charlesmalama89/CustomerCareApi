import { OneToOne } from "typeorm";
import { type } from "os";
import { TicketStatus } from "../entities/tickets.entities";

export class ticketsDTO{
    ticketNum?: number;

    name?: string;

    phone?: string;

    email?: string;

    product?: string;

    department?: string;

    status?: TicketStatus;

    comment?: string;

    closeTicketComment: string;

    createdBy?: string;

    closedBy?: string;

    createdOn?: string;

    updatedOn?: string;
}