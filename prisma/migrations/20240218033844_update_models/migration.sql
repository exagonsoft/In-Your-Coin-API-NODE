/*
  Warnings:

  - You are about to drop the column `dolarinFormalValue` on the `FormalExchange` table. All the data in the column will be lost.
  - You are about to drop the column `euroinFormalValue` on the `FormalExchange` table. All the data in the column will be lost.
  - You are about to drop the column `mlcinFormalValue` on the `FormalExchange` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FormalExchange" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "euroFormalValue" TEXT,
    "dolarFormalValue" TEXT,
    "mlcFormalValue" TEXT,
    "rateDate" TEXT
);
INSERT INTO "new_FormalExchange" ("id", "rateDate") SELECT "id", "rateDate" FROM "FormalExchange";
DROP TABLE "FormalExchange";
ALTER TABLE "new_FormalExchange" RENAME TO "FormalExchange";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
