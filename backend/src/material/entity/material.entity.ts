import { Field, ObjectType } from '@nestjs/graphql';
import { ExtraMaterial } from 'src/extra_meterial_request/entity/extra_meterial.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Material {
  @Field({ nullable: false })
  @PrimaryColumn({ unique: true, nullable: false })
  id: string;
  @Field({ nullable: false })
  @Column({ unique: true })
  name: string;
  @Field({ nullable: false })
  @Column()
  measurement_unit: string;
  @Field()
  @Column()
  cost_pre_unit: Number;
  @OneToMany(() => ExtraMaterial, (exMat) => exMat.material)
  extra_meterials: ExtraMaterial[];
}
