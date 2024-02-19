import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableWhatsappUsers1708374573245
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE whatsapp_users (
        id SERIAL PRIMARY KEY,
        uuid UUID NOT NULL DEFAULT uuid_generate_v4(),
        phone VARCHAR(255) NOT NULL,
        name_message VARCHAR(255),
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP
    );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE whatsapp_users;
    `);
  }
}
