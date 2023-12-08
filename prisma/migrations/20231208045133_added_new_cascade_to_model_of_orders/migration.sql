-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_branchId_fkey";

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;
