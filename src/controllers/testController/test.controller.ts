import { Controller, HttpCode, HttpStatus, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Get()
  @HttpCode(HttpStatus.OK)
  async login(): Promise<string> {
    return 'batata';
  }
}
