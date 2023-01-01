import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitModule } from '../unit/unit.module';
import { UnitMember } from './entity/unit_member.entity';
import { UnitMemberResolver } from './unit_member.resolver';
import { UnitMemberService } from './unit_member.service';

@Module({
  imports: [TypeOrmModule.forFeature([UnitMember]), UnitModule],
  providers: [UnitMemberResolver, UnitMemberService],
  exports: [UnitMemberService],
})
export class UnitMemberModule {}
