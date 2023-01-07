import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomeModule } from './income/income.module';
import { MaterialModule } from './material/material.module';
import { TaskModule } from './task/task.module';
import { EmployeeModule } from './employee/employee.module';
import { InventoryModule } from './inventory/inventory.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { UnitModule } from './unit/unit.module';
import { UnitMemberModule } from './unit_member/unit_member.module';
import { PrototypeModule } from './prototype/prototype.module';
import { ProjectModule } from './project/project.module';
import { ExtraMeterialRequestModule } from './extra_meterial_request/extra_meterial_request.module';
import { WarehouseRequestModule } from './warehouse_request/warehouse_request.module';

dotenv.config();

@Module({
  imports: [
    IncomeModule,
    MaterialModule,
    TaskModule,
    EmployeeModule,
    InventoryModule,
    WarehouseModule,
    UserModule,
    UnitModule,
    UnitMemberModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    PrototypeModule,
    ProjectModule,
    ExtraMeterialRequestModule,
    WarehouseRequestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
