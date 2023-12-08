import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class CreateCategoryDto {
    @ApiProperty({
        type: String
    })
    @IsNotEmpty()
    name: string

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
}