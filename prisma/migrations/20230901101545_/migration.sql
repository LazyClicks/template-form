-- CreateTable
CREATE TABLE "Rdv" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL DEFAULT 'Not provided',
    "phone" TEXT NOT NULL DEFAULT 'Not provided',
    "phone2" TEXT DEFAULT 'Not provided',
    "dateOfBirth" TEXT NOT NULL,
    "motif" TEXT NOT NULL,
    "alreadyPatient" BOOLEAN DEFAULT false,
    "doctor" TEXT DEFAULT 'Not provided',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
