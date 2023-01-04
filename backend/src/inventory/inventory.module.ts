import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialModule } from 'src/material/material.module';
import { Inventory } from './entity/inventory.entity';
import { InventroyResolver } from './inventory.resolver';
import { InventoryService } from './inventory.service';

@Module({
  imports: [TypeOrmModule.forFeature([Inventory]), MaterialModule],
  providers: [InventoryService, InventroyResolver],
  exports: [InventoryService],
})
export class InventoryModule {}
