import { Controller, Get, Param, Query } from "@nestjs/common";
import { CompaniesService } from "./companies.service";
import { PaginationQueryDto } from "../common/pagination/pagination-query.dto";
@Controller("companies")
export class CompaniesController { constructor(private readonly service: CompaniesService) {} @Get() findAll(@Query() _q: PaginationQueryDto) { return this.service.findAll(); } @Get(":id") findOne(@Param("id") id: string) { return this.service.findOne(id); } }
