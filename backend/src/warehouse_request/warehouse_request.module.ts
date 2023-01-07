import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryModule } from '../inventory/inventory.module';
import { WarehouseRequest } from './entity/warehouse_request.entity';
import { WarehouseReResolver } from './warehouse_requests.resolver';
import { WarehouseRequestsService } from './warehouse_requests.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([WarehouseRequest]),
    forwardRef(() => InventoryModule),
  ],
  providers: [WarehouseReResolver, WarehouseRequestsService],
  exports: [WarehouseRequestsService],
})
export class WarehouseRequestModule {}
