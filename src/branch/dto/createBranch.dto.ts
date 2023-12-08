import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateBranchDto {
    @ApiProperty({
        type: String
    })
    @IsNotEmpty()
    address: string

    @ApiProperty({
        type: String
    })
    @IsNotEmpty()
    timeWorkStart?: string 

    @ApiProperty({
        type: String
    })
    @IsNotEmpty()
    timeWorkEnd?: string

}