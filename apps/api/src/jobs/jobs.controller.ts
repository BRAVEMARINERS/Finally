import { Controller, Get, Param, Query } from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { PaginationQueryDto } from "../common/pagination/pagination-query.dto";
@Controller("jobs")
export class JobsController { constructor(private readonly service: JobsService) {} @Get() findAll(@Query() _q: PaginationQueryDto) { return this.service.findAll(); } @Get(":id") findOne(@Param("id") id: string) { return this.service.findOne(id); } }
