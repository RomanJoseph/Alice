import { Injectable } from '@nestjs/common';
import { UserPostgresAdapter } from 'src/infra/typeorm/authModule/adapters/UserPostgresAdapter';
import { loginUserServiceCommand } from './commands/loginUserServiceCommand';
import { EncryptService } from 'src/infra/encrypt/EncryptService';
import { JwtService } from 'src/infra/jwt/JwtService';
import { loginUserResponse } from 'src/controllers/auth/responses/loginUserResponse';

@Injectable()
export class LoginUserService {
  constructor(
    private readonly userPostgresAdapter: UserPostgresAdapter,
    private readonly encryptService: EncryptService,
    private readonly jwtService: JwtService,
  ) {}

  async execute(command: loginUserServiceCommand): Promise<loginUserResponse> {
    const user = await this.userPostgresAdapter.findByLogin(command.login);

    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordCorrect = await this.encryptService.compare(
      command.password,
      user.password,
    );

    if (!isPasswordCorrect) {
      throw new Error('Invalid password');
    }

    const token = await this.jwtService.generateToken(user);

    return {
      token,
      user: {
        id: user.id,
      },
    };
  }
}
