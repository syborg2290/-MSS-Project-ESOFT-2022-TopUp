import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExtraMaterial } from './entity/extra_meterial.entity';
import { ExtraMaterialService } from './extra_material.service';
import { ExtraMaterialResolver } from './extra_material.resolver';
import { TaskModule } from 'src/task/task.module';
import { MaterialModule } from 'src/material/material.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExtraMaterial]),
    TaskModule,
    MaterialModule,
  ],
  providers: [ExtraMaterialService, ExtraMaterialResolver],
  exports: [ExtraMaterialService],
})
export class ExtraMeterialRequestModule {}
