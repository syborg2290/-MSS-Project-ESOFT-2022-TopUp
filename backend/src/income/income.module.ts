import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Income } from './entity/income.entity';
import { IncomeResolver } from './income.resolver';
import { IncomeService } from './income.service';

@Module({
  imports: [TypeOrmModule.forFeature([Income])],
  providers: [IncomeService, IncomeResolver],
  exports: [IncomeService],
})
export class IncomeModule {}
