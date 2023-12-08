import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { BranchService } from "./branch.service";
import { CreateBranchDto } from "./dto/createBranch.dto";
import { ChangeBranchDto } from "./dto/changeBranch.dto";
import { ApiBody } from "@nestjs/swagger";


@Controller("admin")
export class BranchController {
    constructor(private branchService: BranchService) {}

    @Get("branch")
    getAllBranches() {
        return this.branchService.getBranch();
    }

    @ApiBody({type: [CreateBranchDto]})
    @Post("branch")
    createBranch(@Body() dto: CreateBranchDto) {
        return this.branchService.createBranch(dto);
    }

    @Delete("branch/:branchId")
    deleteBranch(@Param("branchId") branchId: string) {
        return this.branchService.deleteBranch(branchId);
    }

    @Patch("branch/:branchId")
    changeBranch(@Param("branchId") branchId: string,
        @Body() dto: ChangeBranchDto) {
        return this.branchService.changeBranch(branchId, dto);
    }
}