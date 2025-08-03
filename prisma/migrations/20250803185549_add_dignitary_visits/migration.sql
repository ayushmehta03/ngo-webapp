-- CreateTable
CREATE TABLE "dignitaryVisit" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imagUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dignitaryVisit_pkey" PRIMARY KEY ("id")
);
