import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { DepartmentsRepository} from './repositories/department.repository'
import { Departments } from './entities/departments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Departments])],
  providers: [DepartmentsService],
  controllers: [DepartmentsController]
})
export class DepartmentsModule {}
