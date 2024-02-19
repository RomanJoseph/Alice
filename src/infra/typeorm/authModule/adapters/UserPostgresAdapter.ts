import { Inject, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserPostgresAdapter extends Repository<User> {
  constructor(@Inject('DataSource') private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async findByLogin(login: string): Promise<User> {
    return this.findOne({ where: { login } });
  }
}
