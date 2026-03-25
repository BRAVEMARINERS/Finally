import { Injectable } from "@nestjs/common";
@Injectable()
export class JobsService { findAll() { return { message: "jobs list placeholder" }; } findOne(id: string) { return { id, message: "jobs details placeholder" }; } }
