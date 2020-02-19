import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HrmDepartments } from './entities/departments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HrmDepartments])],
  providers: [DepartmentsService],
  controllers: [DepartmentsController]
})
export class DepartmentsModule {}
