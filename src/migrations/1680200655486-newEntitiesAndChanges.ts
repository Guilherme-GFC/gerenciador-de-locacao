import { MigrationInterface, QueryRunner } from "typeorm";

export class newEntitiesAndChanges1680200655486 implements MigrationInterface {
    name = 'newEntitiesAndChanges1680200655486'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "leases" RENAME COLUMN "hour" TO "hourId"`);
        await queryRunner.query(`CREATE TABLE "hours_available" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "hour" TIME NOT NULL, CONSTRAINT "PK_df94758d506d92e47ef6af7552f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "unavailable_days" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "date" date NOT NULL, CONSTRAINT "PK_84a79d08069d2fe77ba8b14f8b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "locations_hours_hours_available" ("locationsId" uuid NOT NULL, "hoursAvailableId" uuid NOT NULL, CONSTRAINT "PK_3044e08873001b1d83226d72458" PRIMARY KEY ("locationsId", "hoursAvailableId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6c5a287c0469cc35794d00322c" ON "locations_hours_hours_available" ("locationsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_bdb0786cd6741cbef9b6f9ee18" ON "locations_hours_hours_available" ("hoursAvailableId") `);
        await queryRunner.query(`CREATE TABLE "locations_unavailable_days_unavailable_days" ("locationsId" uuid NOT NULL, "unavailableDaysId" uuid NOT NULL, CONSTRAINT "PK_605b59823ca6724f3473a67d58a" PRIMARY KEY ("locationsId", "unavailableDaysId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6b44a2588d7527de36641e3d68" ON "locations_unavailable_days_unavailable_days" ("locationsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_1a1da3ddf8e94c910c7bd20af3" ON "locations_unavailable_days_unavailable_days" ("unavailableDaysId") `);
        await queryRunner.query(`ALTER TABLE "leases" DROP COLUMN "hourId"`);
        await queryRunner.query(`ALTER TABLE "leases" ADD "hourId" uuid`);
        await queryRunner.query(`ALTER TABLE "leases" ADD CONSTRAINT "FK_ce2fb56e4b4fad82aacedf4c011" FOREIGN KEY ("hourId") REFERENCES "hours_available"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "locations_hours_hours_available" ADD CONSTRAINT "FK_6c5a287c0469cc35794d00322c9" FOREIGN KEY ("locationsId") REFERENCES "locations"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "locations_hours_hours_available" ADD CONSTRAINT "FK_bdb0786cd6741cbef9b6f9ee18b" FOREIGN KEY ("hoursAvailableId") REFERENCES "hours_available"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "locations_unavailable_days_unavailable_days" ADD CONSTRAINT "FK_6b44a2588d7527de36641e3d68a" FOREIGN KEY ("locationsId") REFERENCES "locations"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "locations_unavailable_days_unavailable_days" ADD CONSTRAINT "FK_1a1da3ddf8e94c910c7bd20af37" FOREIGN KEY ("unavailableDaysId") REFERENCES "unavailable_days"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "locations_unavailable_days_unavailable_days" DROP CONSTRAINT "FK_1a1da3ddf8e94c910c7bd20af37"`);
        await queryRunner.query(`ALTER TABLE "locations_unavailable_days_unavailable_days" DROP CONSTRAINT "FK_6b44a2588d7527de36641e3d68a"`);
        await queryRunner.query(`ALTER TABLE "locations_hours_hours_available" DROP CONSTRAINT "FK_bdb0786cd6741cbef9b6f9ee18b"`);
        await queryRunner.query(`ALTER TABLE "locations_hours_hours_available" DROP CONSTRAINT "FK_6c5a287c0469cc35794d00322c9"`);
        await queryRunner.query(`ALTER TABLE "leases" DROP CONSTRAINT "FK_ce2fb56e4b4fad82aacedf4c011"`);
        await queryRunner.query(`ALTER TABLE "leases" DROP COLUMN "hourId"`);
        await queryRunner.query(`ALTER TABLE "leases" ADD "hourId" TIME NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1a1da3ddf8e94c910c7bd20af3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6b44a2588d7527de36641e3d68"`);
        await queryRunner.query(`DROP TABLE "locations_unavailable_days_unavailable_days"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bdb0786cd6741cbef9b6f9ee18"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6c5a287c0469cc35794d00322c"`);
        await queryRunner.query(`DROP TABLE "locations_hours_hours_available"`);
        await queryRunner.query(`DROP TABLE "unavailable_days"`);
        await queryRunner.query(`DROP TABLE "hours_available"`);
        await queryRunner.query(`ALTER TABLE "leases" RENAME COLUMN "hourId" TO "hour"`);
    }

}
