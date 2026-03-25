import { IsEnum, IsOptional, IsString } from "class-validator";
export enum DocumentTypeDto { PASSPORT = "PASSPORT", SEAMAN_BOOK = "SEAMAN_BOOK", MEDICAL_CERTIFICATE = "MEDICAL_CERTIFICATE", VISA = "VISA", OTHER = "OTHER" }
export class CreateDocumentDto { @IsEnum(DocumentTypeDto) type!: DocumentTypeDto; @IsOptional() @IsString() documentNumber?: string; @IsOptional() @IsString() storageKey?: string; @IsOptional() @IsString() notes?: string; }
