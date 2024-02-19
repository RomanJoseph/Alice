import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableTalks1708374692956 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE talks (
            id SERIAL PRIMARY KEY,
            uuid UUID NOT NULL DEFAULT uuid_generate_v4(),
            whatsapp_user INTEGER NOT NULL REFERENCES whatsapp_users(id),
            is_done BOOLEAN NOT NULL DEFAULT false,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE talks;
    `);
  }
}
