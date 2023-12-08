import { Body, Controller, Post } from "@nestjs/common";
import { PromocodeService } from "./promocode.service";
import { createPromocodeDto } from "./dto/createPromocode.dto";
import { ApiBody } from "@nestjs/swagger";



@Controller("admin")
export class PromocodeController {
    constructor(private promocodeService: PromocodeService) {}

    @ApiBody({type: [createPromocodeDto]})
    @Post("createPromocode")
    createPromocode(@Body() dto: createPromocodeDto) {
        return this.promocodeService.createPromocode(dto);
    }
}