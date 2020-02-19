import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HrmDepartments } from './entities/departments.entity';


@Injectable()
export class DepartmentsService {
    constructor(
        @InjectRepository(HrmDepartments)
        private readonly DepartmentsService: Repository<HrmDepartments[]>
    ){}

    getDepartments(){
      return  this.DepartmentsService.find();
    }
}
