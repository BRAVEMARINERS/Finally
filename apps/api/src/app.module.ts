import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { SeafarersModule } from "./seafarers/seafarers.module";
import { CompaniesModule } from "./companies/companies.module";
import { JobsModule } from "./jobs/jobs.module";
import { ApplicationsModule } from "./applications/applications.module";
import { DocumentsModule } from "./documents/documents.module";
import { UploadsModule } from "./uploads/uploads.module";
import { AlertsModule } from "./alerts/alerts.module";
import { MessagesModule } from "./messages/messages.module";
import { NotificationsModule } from "./notifications/notifications.module";
import { AiModule } from "./ai/ai.module";
import { AdminModule } from "./admin/admin.module";
@Module({ imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, SeafarersModule, CompaniesModule, JobsModule, ApplicationsModule, DocumentsModule, UploadsModule, AlertsModule, MessagesModule, NotificationsModule, AiModule, AdminModule] })
export class AppModule {}
