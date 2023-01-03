import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from 'src/employee/employee.module';
import { PrototypeModule } from 'src/prototype/prototype.module';
import { UnitModule } from 'src/unit/unit.module';
import { Task } from './entity/task.entity';
import { TaskResolver } from './task.resolver';
import { TaskService } from './task.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task]),
    UnitModule,
    EmployeeModule,
    PrototypeModule,
  ],
  providers: [TaskResolver, TaskService],
  exports: [TaskService],
})
export class TaskModule {}
