import { PrismaService } from "src/prisma/prisma.service";
import { createPromocodeDto } from "./dto/createPromocode.dto";

export class PromocodeService {
    constructor(private prismaService: PrismaService) {}

    async createPromocode(dto: createPromocodeDto) {
        try {
            // const createdPromocode = 
        } catch(err) {
            throw new Error(err.message);
        }
    }
}