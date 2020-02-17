import { Repository, EntityRepository } from "typeorm";
import { Tickets } from "../entities/pending-tickets.entity";

@EntityRepository(Tickets)
export class PendingTicketsRepository extends Repository<Tickets>{}