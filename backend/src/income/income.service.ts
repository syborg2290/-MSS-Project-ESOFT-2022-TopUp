import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IncomeCreateDTO } from './dto/create-dto.input';
import { Income } from './entity/income.entity';

@Injectable()
export class IncomeService {
  constructor(
    @InjectRepository(Income)
    private incomeRepository: Repository<Income>,
  ) {}

  async createIncome(income: IncomeCreateDTO): Promise<Object> {
    try {
      return new Promise(async (resolve, reject) => {
        const incomeEn = this.incomeRepository.create(income);
        resolve({
          message: 'success',
          status: HttpStatus.OK,
          data: this.incomeRepository.save(incomeEn),
        });
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getIncomeById(id: string): Promise<Income> {
    try {
      return this.incomeRepository.findOne({
        where: { id: id },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
