import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialModule } from 'src/material/material.module';
import { WarehouseModule } from 'src/warehouse/warehouse.module';
import { WarehouseRequestModule } from 'src/warehouse_request/warehouse_request.module';
import { Inventory } from './entity/inventory.entity';
import { InventroyResolver } from './inventory.resolver';
import { InventoryService } from './inventory.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Inventory]),
    MaterialModule,
    forwardRef(() => WarehouseRequestModule),
    WarehouseModule
  ],
  providers: [InventoryService, InventroyResolver],
  exports: [InventoryService],
})
export class InventoryModule {}
