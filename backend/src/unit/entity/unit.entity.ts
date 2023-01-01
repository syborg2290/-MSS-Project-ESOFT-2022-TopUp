import { Field, ObjectType } from '@nestjs/graphql';
import { UnitMember } from '../../unit_member/entity/unit_member.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Unit {
  @Field({ nullable: false })
  @PrimaryColumn({ unique: true, nullable: false })
  id: string;
  @Field({ nullable: false })
  @Column({ unique: true })
  code: string;
  @Field({ nullable: false })
  @Column()
  department: string;
  @OneToMany(() => UnitMember, (uniMe) => uniMe.unit)
  members: UnitMember[];
}
