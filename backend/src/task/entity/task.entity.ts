import { Field, ObjectType } from '@nestjs/graphql';
import { Employee } from 'src/employee/entity/employee.entity';
import { ExtraMaterial } from 'src/extra_meterial_request/entity/extra_meterial.entity';
import { Project } from 'src/project/entity/project.entity';
import { Prototype } from 'src/prototype/entity/prototype.entity';
import { Unit } from 'src/unit/entity/unit.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Task {
  @Field({ nullable: false })
  @PrimaryColumn({ unique: true, nullable: false })
  id: string;
  @Field({ nullable: false })
  @Column({ unique: true })
  title: string;
  @Field()
  @Column()
  supervisor: string;
  @Field()
  @Column()
  induvidualOrUnit: Boolean;
  @ManyToOne(() => Project, (project) => project.tasks)
  project: Project;
  @ManyToOne(() => Unit, (unit) => unit.tasks)
  unit: Unit;
  @ManyToOne(() => Employee, (emp) => emp.tasks)
  employee: Employee;
  @ManyToOne(() => Prototype, (prot) => prot.tasks)
  prototype: Prototype;
  @Field()
  @Column()
  start_date: string;
  @Field()
  @Column()
  finished_date: string;
  @OneToMany(() => ExtraMaterial, (exMat) => exMat.task)
  extra_meterial: ExtraMaterial[];
}
