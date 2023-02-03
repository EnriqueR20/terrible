-- CreateTable
CREATE TABLE "Comentario" (
    "id" SERIAL NOT NULL,
    "comentario" TEXT NOT NULL,
    "calificacion" INTEGER NOT NULL,

    CONSTRAINT "Comentario_pkey" PRIMARY KEY ("id")
);
