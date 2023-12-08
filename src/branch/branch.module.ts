import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { BranchService } from "./branch.service";
import { BranchController } from "./branch.controller";

@Module({
    imports: [PrismaModule],
    providers: [BranchService],
    controllers: [BranchController]
})
export class BranchModule {};