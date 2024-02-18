-- CreateTable
CREATE TABLE "InFormalExchange" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "euroinFormalValue" TEXT NOT NULL,
    "dolarinFormalValue" TEXT NOT NULL,
    "mlcinFormalValue" TEXT NOT NULL,
    "rateDate" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "FormalExchange" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "euroFormalValue" TEXT NOT NULL,
    "dolarFormalValue" TEXT NOT NULL,
    "mlcFormalValue" TEXT NOT NULL,
    "rateDate" TEXT NOT NULL
);
