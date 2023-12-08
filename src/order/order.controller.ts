import { Body, Controller, Get, Post } from "@nestjs/common";
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dto/createOrder.dto";
import { ApiBody } from "@nestjs/swagger";


@Controller("admin")
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Get("orders")
    getOrders() {
        return this.orderService.getOrders()
    }

    @ApiBody({type: [CreateOrderDto]})
    @Post("orders")
    createOrder(@Body() dto: CreateOrderDto) {
        return this.orderService.createOrder(dto);
    }
}