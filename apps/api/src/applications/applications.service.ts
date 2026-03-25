import { Injectable } from "@nestjs/common";
@Injectable()
export class ApplicationsService { findAll() { return { message: "applications list placeholder" }; } findOne(id: string) { return { id, message: "applications details placeholder" }; } }
