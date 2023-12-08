import { IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ChangeDishDto {
    @ApiProperty({
        type: String
    })
    @IsOptional()
    name?: string

    @ApiProperty({
        type: Number
    })
    @IsOptional()
    price?: number

    @ApiProperty({
        type: String
    })
    @IsOptional()
    description?: string

    @ApiProperty({
        type: String
    })
    @IsOptional()
    imageURL?: string 

    @ApiProperty({
        type: Number
    })
    @IsOptional()
    categoryId?: number
}