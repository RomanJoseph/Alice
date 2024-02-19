import { Module } from '@nestjs/common';
import { AuthController } from '../../../../controllers/auth/auth.controller';
import { RegisterUserService } from '../../../../services/auth/RegisterUserService';
import { DatabaseModule } from '../database/database.module';
import { LoginUserService } from '../../../../services/auth/LoginUserService';
import { EncryptService } from '../../../../infra/encrypt/EncryptService';
import { JwtService } from '../../../../infra/jwt/JwtService';
import { JwtService as NestJwt } from '@nestjs/jwt';
import { UserPostgresAdapter } from '../../../typeorm/authModule/adapters/UserPostgresAdapter';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [
    RegisterUserService,
    LoginUserService,
    UserPostgresAdapter,
    EncryptService,
    JwtService,
    NestJwt,
  ],
  exports: [RegisterUserService, UserPostgresAdapter],
})
export class authModule {}
