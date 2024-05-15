/*
  Warnings:

  - A unique constraint covering the columns `[EMAIL]` on the table `Client` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `EMAIL` ON `Client`(`EMAIL`);
