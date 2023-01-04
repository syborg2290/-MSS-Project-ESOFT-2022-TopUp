import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaterialCreateDTO } from './dto/create-dto-input';
import { Material } from './entity/material.entity';

@Injectable()
export class MaterialService {
  constructor(
    @InjectRepository(Material)
    private materialRepository: Repository<Material>,
  ) {}

  async createMaterial(material: MaterialCreateDTO): Promise<Object> {
    try {
      return new Promise((resolve, reject) => {
        const materialEn = this.materialRepository.create(material);
        resolve({
          message: 'success',
          status: HttpStatus.OK,
          data: this.materialRepository.save(materialEn),
        });
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateMaterial(material: MaterialCreateDTO): Promise<Object> {
    try {
      return new Promise((resolve, reject) => {
        const prototypeEn = this.materialRepository.create(material);
        resolve({
          message: 'success',
          status: HttpStatus.OK,
          data: this.materialRepository.save(prototypeEn),
        });
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getMaterialById(id: string): Promise<Material> {
    try {
      return this.materialRepository.findOne({
        where: { id: id },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
