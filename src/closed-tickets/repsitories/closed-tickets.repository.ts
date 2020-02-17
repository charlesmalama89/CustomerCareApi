import { EntityRepository, Repository } from "typeorm";
import { Tickets } from "../entities/closed-tickets.entity";

@EntityRepository(Tickets)
export class ClosedTicketsRepository extends Repository<Tickets>{}