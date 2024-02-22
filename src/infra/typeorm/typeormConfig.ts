import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config();

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  migrationsRun: false,
  entities: [`dist/infra/typeorm/**/entities/*{.ts,.js}`],
  migrations: [`dist/infra/typeorm/migrations/*{.ts,.js}`],
  synchronize: true,
};
