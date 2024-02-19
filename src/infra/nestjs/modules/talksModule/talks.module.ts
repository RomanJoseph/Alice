import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TalksController } from 'src/controllers/talkModule/talk.controller';
import { CreateWhatsappUserService } from 'src/services/talkModule/CreateWhatsappUserService';
import { WhatsappUserPostgresAdapter } from 'src/infra/typeorm/talkModule/adapters/WhatsappUserPostgresAdapter';

@Module({
  imports: [DatabaseModule],
  controllers: [TalksController],
  providers: [CreateWhatsappUserService, WhatsappUserPostgresAdapter],
  exports: [],
})
export class TalksModule {}
