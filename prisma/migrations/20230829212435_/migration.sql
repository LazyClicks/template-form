/*
  Warnings:

  - You are about to drop the `RDV` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "RDV";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Rdv" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "phone2" TEXT,
    "dateOfBirth" DATETIME NOT NULL,
    "motif" TEXT NOT NULL,
    "alreadyPatient" BOOLEAN NOT NULL DEFAULT false,
    "doctor" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
