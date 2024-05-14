/*
  Warnings:

  - Added the required column `Email` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `restaurant` ADD COLUMN `Email` VARCHAR(191) NOT NULL;
