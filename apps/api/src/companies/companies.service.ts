import { Injectable } from "@nestjs/common";
@Injectable()
export class CompaniesService { findAll() { return { message: "companies list placeholder" }; } findOne(id: string) { return { id, message: "companies details placeholder" }; } }
