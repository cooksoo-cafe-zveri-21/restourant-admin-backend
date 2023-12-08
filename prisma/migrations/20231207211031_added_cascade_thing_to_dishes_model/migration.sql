-- DropForeignKey
ALTER TABLE "Dishes" DROP CONSTRAINT "Dishes_categoryId_fkey";

-- AddForeignKey
ALTER TABLE "Dishes" ADD CONSTRAINT "Dishes_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
