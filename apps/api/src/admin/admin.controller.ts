import { Controller, Get, Param, Query } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { PaginationQueryDto } from "../common/pagination/pagination-query.dto";
@Controller("admin")
export class AdminController { constructor(private readonly service: AdminService) {} @Get() findAll(@Query() _q: PaginationQueryDto) { return this.service.findAll(); } @Get(":id") findOne(@Param("id") id: string) { return this.service.findOne(id); } }
