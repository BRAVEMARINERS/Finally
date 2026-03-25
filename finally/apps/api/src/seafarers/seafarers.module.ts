import { Module } from "@nestjs/common";
import { SeafarersController } from "./seafarers.controller";
import { SeafarersService } from "./seafarers.service";
@Module({ controllers: [SeafarersController], providers: [SeafarersService], exports: [SeafarersService] })
export class SeafarersModule {}
