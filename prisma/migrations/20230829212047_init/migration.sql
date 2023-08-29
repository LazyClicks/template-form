-- CreateTable
CREATE TABLE "RDV" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
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
