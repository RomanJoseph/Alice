import { Injectable } from '@nestjs/common';
import { registerUserServiceCommand } from './commands/registerUserServiceCommand';
import { EncryptService } from 'src/infra/encrypt/EncryptService';
import { UserPostgresAdapter } from 'src/infra/typeorm/authModule/adapters/UserPostgresAdapter';
import { User } from 'src/infra/typeorm/authModule/entities/user.entity';

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
