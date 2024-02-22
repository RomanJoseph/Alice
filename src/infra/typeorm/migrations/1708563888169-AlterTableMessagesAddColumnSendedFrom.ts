import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableMessagesAddColumnSendedFrom1708563888169
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE messages
            ADD COLUMN sended_from VARCHAR(255) NOT NULL CHECK (sended_from IN ('user', 'bot', 'system'));
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE messages
            DROP COLUMN sended_from;
        `);
  }
}
