import { Module } from '@nestjs/common';
import { AppController } from '../../../controllers/app.controller';
import { AppService } from '../../../services/app.service';
import { DatabaseModule } from './database/database.module';
import { authModule } from './auth/auth.module';
import { TalksModule } from './talksModule/talks.module';

@Module({
  imports: [DatabaseModule, authModule, TalksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
