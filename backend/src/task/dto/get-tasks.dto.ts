import { Field, ObjectType } from "@nestjs/graphql";
import { Employee } from "src/employee/entity/employee.entity";
import { Project } from "src/project/entity/project.entity";
import { Prototype } from "src/prototype/entity/prototype.entity";
import { Unit } from "src/unit/entity/unit.entity";
import { Task } from "../entity/task.entity";

@ObjectType()
export class TasksGetDTO {
  @Field()
  id: string;
  @Field()
  task: Task;
  @Field()
  unit: Unit;
  @Field()
  employee: Employee;
  @Field()
  project: Project;
  @Field()
  prototype: Prototype;
}
