import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateBranchDto } from "./dto/createBranch.dto";
import { ChangeBranchDto } from "./dto/changeBranch.dto";

@Injectable()
export class BranchService {
    constructor(private prismaService: PrismaService) {}

    async getBranch() {
        try {
            const allBranches = this.prismaService.branches.findMany({});

            return allBranches
        } catch(err) {
            throw new Error(err.message);
        }
    }

    async createBranch(dto: CreateBranchDto) {
        try {
            const createdBranch = this.prismaService.branches.create({
                data: {
                    address: dto.address,
                    timeWorkStart: dto.timeWorkStart,
                    timeWorkEnd: dto.timeWorkEnd
                }
            })

            return createdBranch;
        } catch(err) {
            throw new Error(err.message)
        }
    }

    async deleteBranch(branchId: string) {
        try {
            const deleteBranch = this.prismaService.branches.delete({
                where: {
                    id: parseInt(branchId)
                }
            })

            return deleteBranch;
        } catch(err) {
            throw new Error(err.message);
        }
    }

    async changeBranch(branchId: string, dto: ChangeBranchDto) {
        try {
            const changedBranch = this.prismaService.branches.update({
                where: {
                    id: parseInt(branchId)
                },
                data: {
                    ...dto
                }
            })

            return changedBranch;
        } catch(err) {
            throw new Error(err.message);
        }
    }
}