import { Inject, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { WhatsappUser } from '../entities/WhatsappUser';

@Injectable()
export class WhatsappUserPostgresAdapter extends Repository<WhatsappUser> {
  constructor(@Inject('DataSource') private readonly dataSource: DataSource) {
    super(WhatsappUser, dataSource.createEntityManager());
  }

  async findByUuid(uuid: string): Promise<WhatsappUser> {
    return this.findOne({ where: { uuid } });
  }

  async findById(id: number): Promise<WhatsappUser> {
    return this.findOne({ where: { id } });
  }
}
