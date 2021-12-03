import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUser1638500797840 implements MigrationInterface {
  name = 'CreateUser1638500797840'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "user" ("user_id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "is_admin" boolean NOT NULL DEFAULT false, "is_active" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_user_id" PRIMARY KEY ("user_id"))`);
    await queryRunner.query(`CREATE UNIQUE INDEX "IDX_email" ON "user" ("email") `);
    await queryRunner.query(`CREATE INDEX "IDX_is_active" ON "user" ("is_active") `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "public"."IDX_is_active"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_email"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }

}
