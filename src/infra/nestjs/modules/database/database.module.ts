import { Module } from '@nestjs/common';
import { databaseProvider } from '../../../typeorm/dataSource';

@Module({
  providers: [...databaseProvider],
  exports: [...databaseProvider],
})
export class DatabaseModule {}
