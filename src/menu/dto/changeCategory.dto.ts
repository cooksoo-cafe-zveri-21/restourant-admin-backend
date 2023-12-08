import { IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class ChangeCategoryDto {
    @ApiProperty({
        type: String
    })
    @IsOptional()
    name?: string

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
}