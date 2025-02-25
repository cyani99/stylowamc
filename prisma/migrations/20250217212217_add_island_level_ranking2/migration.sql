/*
  Warnings:

  - The primary key for the `IslandLevelRanking` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `IslandLevelRanking` table. All the data in the column will be lost.
  - The required column `uuid` was added to the `IslandLevelRanking` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `IslandLevelRanking` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `uuid` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`uuid`);
