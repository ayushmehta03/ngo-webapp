-- CreateTable
CREATE TABLE "volunteerInfo" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "phoneno" TEXT NOT NULL,
    "supportType" TEXT NOT NULL,
    "mailId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "volunteerInfo_pkey" PRIMARY KEY ("id")
);
