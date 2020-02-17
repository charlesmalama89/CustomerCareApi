import { Repository, EntityRepository } from "typeorm";
import { Departments } from "../entities/departments.entity";

@EntityRepository(Departments)
export class DepartmentsRepository extends Repository<Departments>{}