/*
  Warnings:

  - You are about to drop the column `anythingElse` on the `Ambassador` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ambassador" DROP COLUMN "anythingElse",
ADD COLUMN     "additional" TEXT;
