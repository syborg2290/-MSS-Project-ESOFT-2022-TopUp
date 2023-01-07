import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Material } from './entity/material.entity';
import { MaterialResolver } from './material.resolver';
import { MaterialService } from './material.service';

@Module({
  imports: [TypeOrmModule.forFeature([Material])],
  providers: [MaterialService, MaterialResolver],
  exports: [MaterialService],
})
export class MaterialModule {}
