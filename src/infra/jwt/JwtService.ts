import { Injectable } from '@nestjs/common';
import { JwtSignOptions, JwtService as NestJwt } from '@nestjs/jwt';

import dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class JwtService {
  private options: JwtSignOptions;

  constructor(private readonly jwtService: NestJwt) {
    this.options = {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRES_IN,
    };
  }

  async generateToken(payload: any): Promise<string> {
    const token = await this.jwtService.signAsync({ payload }, this.options);
    return token;
  }
}
