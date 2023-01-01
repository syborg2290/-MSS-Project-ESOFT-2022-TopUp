import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UnitCreateDTO } from './dto/create-unit.input';
import { Unit } from './entity/unit.entity';

@Injectable()
export class UnitService {
  constructor(
    @InjectRepository(Unit)
    private unitRepository: Repository<Unit>,
  ) {}

  async createUnit(unit: UnitCreateDTO): Promise<Object> {
    try {
      return new Promise((resolve, reject) => {
        const unitEn = this.unitRepository.create(unit);
        resolve({
          message: 'success',
          status: HttpStatus.OK,
          data: this.unitRepository.save(unitEn),
        });
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateUnit(unit: UnitCreateDTO): Promise<Object> {
    try {
      return new Promise((resolve, reject) => {
        const unitEn = this.unitRepository.create(unit);
        resolve({
          message: 'success',
          status: HttpStatus.OK,
          data: this.unitRepository.save(unitEn),
        });
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getUnitById(id: string): Promise<Unit> {
    try {
      return this.unitRepository.findOne({
        where: { id: id },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getUnitByCode(code: string): Promise<Unit> {
    try {
      return this.unitRepository.findOne({
        where: { code: code },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
