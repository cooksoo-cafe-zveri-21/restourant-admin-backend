import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class CreateOrderDto {
    @ApiProperty({
        type: Number
    })
    @IsNotEmpty()
    branchId: number

    @ApiProperty({
        type: Number
    })
    @IsNotEmpty()
    typeOrderId: number

    @ApiProperty({
        type: Number
    })
    @IsNotEmpty()
    curierId: number

    @ApiProperty({
        type: Number
    })
    @IsNotEmpty()
    promocodeId: number
}