import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unit } from './entity/unit.entity';
import { UnitResolver } from './unit.resolver';
import { UnitService } from './unit.service';

@Module({
  imports: [TypeOrmModule.forFeature([Unit])],
  providers: [UnitService, UnitResolver],
  exports: [UnitService],
})
export class UnitModule {}
