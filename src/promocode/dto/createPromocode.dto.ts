import { IsArray, IsNotEmpty, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class createPromocodeDto {
    @ApiProperty({
        type: String
    })
    @IsNotEmpty()
    name: string

    @ApiProperty({
        type: Number
    })
    @IsNotEmpty()
    @IsNumber()
    discount: number

    @ApiProperty({
        type: Number
    })
    @IsNotEmpty()
    @IsArray()
    @IsNumber({}, {each: true})
    dishId: number[]

}