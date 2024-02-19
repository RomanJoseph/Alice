import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateWhatsappUserService } from 'src/services/talkModule/CreateWhatsappUserService';
import { createWhatsappUserRequest } from './request/CreateWhatsappUserRequest';
import { createWhatssapUserResponse } from './response/createWhatsappUserResponse';

@Controller('talks')
export class TalksController {
  constructor(
    private readonly createWhatsappUserService: CreateWhatsappUserService,
  ) {}

  @Post('create-whatsapp-user')
  @HttpCode(HttpStatus.CREATED)
  async createWhatsappUser(
    @Body() request: createWhatsappUserRequest,
  ): Promise<createWhatssapUserResponse> {
    const whatssapUser = await this.createWhatsappUserService.execute(request);

    return {
      user: whatssapUser,
    };
  }
}
