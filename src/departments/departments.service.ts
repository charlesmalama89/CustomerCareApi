import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Departments } from './entities/departments.entity'

@Injectable()
export class DepartmentsService {
    constructor(
        @InjectRepository(Departments)
        private readonly departmentsService: Repository<Departments[]>
    ){}

    getDepartments(){
      return  this.departmentsService.find();
    }
}
