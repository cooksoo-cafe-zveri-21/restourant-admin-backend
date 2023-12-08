import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateDishDto {
    @ApiProperty({
        type: String
    })
    @IsNotEmpty()
    name: string

    @ApiProperty({
        type: Number
    })
    @IsNotEmpty()
    price: number

    @ApiProperty({
        type: String
    })
    @IsNotEmpty()
    description: string

    @ApiProperty({
        type: String
    })
    @IsNotEmpty()
    imageURL: string 

    @ApiProperty({
        type: Number
    })
    @IsNotEmpty()
    categoryId: number
}