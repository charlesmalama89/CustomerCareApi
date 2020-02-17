import { Repository, EntityRepository } from "typeorm";
import { Tickets } from "../entities/over-due-tickets.entity";

@EntityRepository(Tickets)
export class OverDueTicketsRepository extends Repository<Tickets>{}