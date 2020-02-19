import { Repository, EntityRepository } from "typeorm";
import { HrmDepartments } from "../entities/departments.entity";

@EntityRepository(HrmDepartments)
export class HrmDepartmentsRepository extends Repository<HrmDepartments>{}