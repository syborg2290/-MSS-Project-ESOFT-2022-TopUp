import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prototype } from './entity/prototype.entity';
import { PrototypeCreateDTO } from './dto/create-dto.input';

@Injectable()
export class PrototypeService {
  constructor(
    @InjectRepository(Prototype)
    private prototypeRepository: Repository<Prototype>,
  ) {}

  async createPrototype(prototype: PrototypeCreateDTO): Promise<Object> {
    try {
      return new Promise((resolve, reject) => {
        const prototypeEn = this.prototypeRepository.create(prototype);
        resolve({
          message: 'success',
          status: HttpStatus.OK,
          data: this.prototypeRepository.save(prototypeEn),
        });
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updatePrototype(prototype: PrototypeCreateDTO): Promise<Object> {
    try {
      return new Promise((resolve, reject) => {
        const prototypeEn = this.prototypeRepository.create(prototype);
        resolve({
          message: 'success',
          status: HttpStatus.OK,
          data: this.prototypeRepository.save(prototypeEn),
        });
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getPrototypeById(id: string): Promise<Prototype> {
    try {
      return this.prototypeRepository.findOne({
        where: { id: id },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
