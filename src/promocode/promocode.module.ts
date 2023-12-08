import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { PromocodeService } from "./promocode.service";
import { PromocodeController } from "./promocode.controller";

@Module({
    imports: [PrismaModule],
    providers: [PromocodeService],
    controllers: [PromocodeController]
})
export class PromocodeModule {}