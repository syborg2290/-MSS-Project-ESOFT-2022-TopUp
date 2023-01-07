import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prototype } from './entity/prototype.entity';
import { PrototypeResolver } from './prototype.resolver';
import { PrototypeService } from './prototype.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prototype])],
  providers: [PrototypeService, PrototypeResolver],
  exports: [PrototypeService],
})
export class PrototypeModule {}
