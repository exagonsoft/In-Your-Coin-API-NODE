-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "InFormalExchange" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "euroinFormalValue" TEXT,
    "dolarinFormalValue" TEXT,
    "mlcinFormalValue" TEXT,
    "rateDate" TEXT
);

-- CreateTable
CREATE TABLE "FormalExchange" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "euroinFormalValue" TEXT,
    "dolarinFormalValue" TEXT,
    "mlcinFormalValue" TEXT,
    "rateDate" TEXT
);
