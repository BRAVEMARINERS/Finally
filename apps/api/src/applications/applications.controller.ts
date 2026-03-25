import { Controller, Get, Param, Query } from "@nestjs/common";
import { ApplicationsService } from "./applications.service";
import { PaginationQueryDto } from "../common/pagination/pagination-query.dto";
@Controller("applications")
export class ApplicationsController { constructor(private readonly service: ApplicationsService) {} @Get() findAll(@Query() _q: PaginationQueryDto) { return this.service.findAll(); } @Get(":id") findOne(@Param("id") id: string) { return this.service.findOne(id); } }
