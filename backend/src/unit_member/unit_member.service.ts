import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UnitService } from '../unit/unit.service';
import { Repository } from 'typeorm';
import { UnitMemberCreateDTO } from './dto/create_unit_member.input';
import { UnitMember } from './entity/unit_member.entity';

@Injectable()
export class UnitMemberService {
  constructor(
    @InjectRepository(UnitMember)
    private unitMembersRepository: Repository<UnitMember>,
    @Inject(UnitService)
    private readonly unitService: UnitService,
  ) {}

  async addUnitMember(unitMember: UnitMemberCreateDTO): Promise<Object> {
    try {
      return new Promise(async (resolve, reject) => {
        const unit = await this.unitService.getUnitById(unitMember.unitId);
        if (unit) {
          const memberDbObj = {
            id: unitMember.id,
            employeeId: unitMember.employeeId,
            unit: unit,
          };
          const unitMemberEn = this.unitMembersRepository.create(memberDbObj);
          resolve({
            message: 'success',
            status: HttpStatus.OK,
            data: this.unitMembersRepository.save(unitMemberEn),
          });
        }
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateTheUnit(newUnitCode, id): Promise<Object> {
    try {
      return new Promise(async (resolve, reject) => {
        const unit = await this.unitService.getUnitByCode(newUnitCode);
        if (unit) {
          const curUnitMember = await this.getUnitMemberById(id);
          if (curUnitMember) {
            curUnitMember.unit = unit;

            const newUnitMemEn =
              this.unitMembersRepository.create(curUnitMember);
            resolve({
              message: 'success',
              status: HttpStatus.OK,
              data: this.unitMembersRepository.save(newUnitMemEn),
            });
          } else {
            resolve({
              message: 'Not found!',
              status: HttpStatus.BAD_REQUEST,
              data: null,
            });
          }
        }
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getUnitMemberById(id: string): Promise<UnitMember> {
    try {
      return this.unitMembersRepository.findOne({
        where: { id: id },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getUnitMemberByEmployeeId(empId: string): Promise<UnitMember> {
    try {
      return this.unitMembersRepository.findOne({
        where: { employeeId: empId },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
