import { Field, ObjectType } from '@nestjs/graphql';
import { Employee } from 'src/employee/entity/employee.entity';
import { Prototype } from 'src/prototype/entity/prototype.entity';
import { Unit } from 'src/unit/entity/unit.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Task {
  @Field({ nullable: false })
  @PrimaryColumn({ unique: true, nullable: false })
  id: string;
  @Field({ nullable: false })
  @Column({ unique: true })
  title: string;
  @Field({ nullable: false })
  @Column()
  avg_duration: Number;
  @Field()
  @Column()
  supervisor: string;
  @Field()
  @Column()
  induvidualOrUnit: Boolean;
  @ManyToOne(() => Unit, (unit) => unit.tasks)
  unit: Unit;
  @ManyToOne(() => Employee, (emp) => emp.tasks)
  employee: Employee;
  @ManyToOne(() => Prototype, (prot) => prot.tasks)
  prototype: Prototype;
  @Field()
  @Column()
  date: string; 
}
