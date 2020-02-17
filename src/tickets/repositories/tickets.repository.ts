import { EntityRepository, Repository } from "typeorm";
import { Tickets } from "../entities/tickets.entities";

@EntityRepository(Tickets)
export class TicketsRepository extends Repository<Tickets>{}