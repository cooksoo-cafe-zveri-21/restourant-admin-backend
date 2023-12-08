import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateOrderDto } from "./dto/createOrder.dto";

@Injectable()
export class OrderService {
    constructor(private prismaService: PrismaService) {}

    async getOrders() {
        try {
            const orders = await this.prismaService.orders.findMany({})

            return orders;
        } catch(err) {
            throw new Error(err.message);
        }
    }

    async createOrder(dto: CreateOrderDto) {
        try {
            const createdOrder = await this.prismaService.orders.create({
                data: {
                    branchId: dto.branchId,
                    typeOrderId: dto.typeOrderId,
                    curierId: dto.curierId,
                    promocodeId: dto.promocodeId
                }
            })

            return createdOrder;
        } catch(err) {
            throw new Error(err.message)
        }
    }
}