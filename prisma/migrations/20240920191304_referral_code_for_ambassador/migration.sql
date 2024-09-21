/*
  Warnings:

  - You are about to drop the column `collegeSchool` on the `Ambassador` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[referralCode]` on the table `Ambassador` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `institution` to the `Ambassador` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referralCode` to the `Ambassador` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ambassador" DROP COLUMN "collegeSchool",
ADD COLUMN     "institution" TEXT NOT NULL,
ADD COLUMN     "referralCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Ambassador_referralCode_key" ON "Ambassador"("referralCode");
