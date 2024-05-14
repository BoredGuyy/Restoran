/*
  Warnings:

  - You are about to drop the column `Nom` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `TELEPHONE` on the `client` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `client` DROP COLUMN `Nom`,
    DROP COLUMN `TELEPHONE`;
