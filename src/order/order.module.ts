import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { OrderController } from "./order.controller";
import { OrderService } from "./order.service";

@Module({
    providers: [OrderService],
    controllers: [OrderController],
    imports: [PrismaModule]
})
export class OrderModule {}