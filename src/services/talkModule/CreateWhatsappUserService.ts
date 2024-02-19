import { WhatsappUserPostgresAdapter } from 'src/infra/typeorm/talkModule/adapters/WhatsappUserPostgresAdapter';
import { WhatsappUser } from 'src/infra/typeorm/talkModule/entities/WhatsappUser';
import { createWhatsappUserCommand } from './commands/CreateWhatsappUserCommand';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateWhatsappUserService {
  constructor(
    private readonly whatsappUserRepository: WhatsappUserPostgresAdapter,
  ) {}

  async execute({ phone }: createWhatsappUserCommand): Promise<WhatsappUser> {
    const whatsappUser = new WhatsappUser();

    whatsappUser.phone = phone;

    return this.whatsappUserRepository.save(whatsappUser);
  }
}
