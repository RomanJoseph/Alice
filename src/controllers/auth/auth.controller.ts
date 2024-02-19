import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { RegisterUserService } from '../../services/auth/RegisterUserService';
import { registerUserRequest } from './requests/registerUserRequest';
import { loginUserRequest } from './requests/loginUserRequest';
import { registerUserResponse } from './responses/registerUserResponse';
import { LoginUserService } from 'src/services/auth/LoginUserService';
import { loginUserResponse } from './responses/loginUserResponse';
import { instanceToInstance } from 'class-transformer';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUserService: RegisterUserService,
    private readonly loginUserService: LoginUserService,
  ) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(
    @Body() request: registerUserRequest,
  ): Promise<registerUserResponse> {
    const response = await this.registerUserService.execute(request);
    return { user: response };
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() request: loginUserRequest): Promise<loginUserResponse> {
    const response = await this.loginUserService.execute(request);
    return instanceToInstance(response);
  }
}
