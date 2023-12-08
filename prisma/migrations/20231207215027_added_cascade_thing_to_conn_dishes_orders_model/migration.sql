-- DropForeignKey
ALTER TABLE "connDishesOrders" DROP CONSTRAINT "connDishesOrders_dishId_fkey";

-- AddForeignKey
ALTER TABLE "connDishesOrders" ADD CONSTRAINT "connDishesOrders_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "Dishes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
