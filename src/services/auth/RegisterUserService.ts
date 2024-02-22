import { Injectable } from '@nestjs/common';
import { registerUserServiceCommand } from './commands/registerUserServiceCommand';
import { UserPostgresAdapter } from '../../infra/typeorm/authModule/adapters/UserPostgresAdapter';
import { User } from '../../infra/typeorm/authModule/entities/user.entity';
import { EncryptService } from '../../infra/encrypt/EncryptService';

@Injectable()
export class RegisterUserService {
  constructor(
    private readonly userPostgresAdapter: UserPostgresAdapter,
    private readonly encryptService: EncryptService,
  ) {}

  async execute(command: registerUserServiceCommand): Promise<User> {
    const user = await this.userPostgresAdapter.findByLogin(command.login);

    if (user) {
      throw new Error('User already exists');
    }

    command.password = await this.encryptService.hash(command.password);

    return this.userPostgresAdapter.save(command);
  }
}
