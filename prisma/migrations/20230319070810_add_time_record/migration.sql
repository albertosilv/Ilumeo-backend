-- CreateTable
CREATE TABLE "time_record" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "startRecord" DATETIME NOT NULL,
    "endRecorde" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "time_record_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
