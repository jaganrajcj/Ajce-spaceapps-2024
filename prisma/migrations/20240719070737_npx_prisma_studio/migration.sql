/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Registrations" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "teamLeadName" TEXT NOT NULL,
    "teamLeadPhone" TEXT NOT NULL,

    CONSTRAINT "Registrations_pkey" PRIMARY KEY ("id")
);
