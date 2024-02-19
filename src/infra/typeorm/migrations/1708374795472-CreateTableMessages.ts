import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableMessages1708374795472 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE messages (
                id SERIAL PRIMARY KEY,
                uuid UUID NOT NULL DEFAULT uuid_generate_v4(),
                talk INTEGER NOT NULL REFERENCES talks(id),
                message VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE messages;
        `);
  }
}
