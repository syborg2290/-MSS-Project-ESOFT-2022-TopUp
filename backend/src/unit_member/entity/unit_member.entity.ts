import { Field, ObjectType } from '@nestjs/graphql';
import { Unit } from '../../unit/entity/unit.entity';
import { Column, Entity, PrimaryColumn, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class UnitMember {
  @Field({ nullable: false })
  @PrimaryColumn({ unique: true, nullable: false })
  id: string;
  @Field({ nullable: false })
  @Column({ unique: true })
  employeeId: string;
  @ManyToOne(() => Unit, (unit) => unit.members)
  unit: Unit;
}
