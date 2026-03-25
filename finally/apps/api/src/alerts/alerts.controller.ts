import { Controller, Get, Param, Query } from "@nestjs/common";
import { AlertsService } from "./alerts.service";
import { PaginationQueryDto } from "../common/pagination/pagination-query.dto";
@Controller("alerts")
export class AlertsController { constructor(private readonly service: AlertsService) {} @Get() findAll(@Query() _q: PaginationQueryDto) { return this.service.findAll(); } @Get(":id") findOne(@Param("id") id: string) { return this.service.findOne(id); } }
