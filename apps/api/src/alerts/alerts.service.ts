import { Injectable } from "@nestjs/common";
@Injectable()
export class AlertsService { findAll() { return { message: "alerts list placeholder" }; } findOne(id: string) { return { id, message: "alerts details placeholder" }; } }
