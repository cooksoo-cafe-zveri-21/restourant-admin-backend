import { IsNotEmpty, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ChangeBranchDto {
    @ApiProperty({
        type: String
    })
    @IsOptional()
    address?: string

    @ApiProperty({
        type: String
    })
    @IsOptional()
    timeWorkStart?: string 

    @ApiProperty({
        type: String
    })
    @IsOptional()
    timeWorkEnd?: string

}