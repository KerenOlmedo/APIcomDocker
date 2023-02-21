-- CreateTable
CREATE TABLE "Historic" (
    "id" SERIAL NOT NULL,
    "cep" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Historic_pkey" PRIMARY KEY ("id")
);
