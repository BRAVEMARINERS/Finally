import { IsIn, IsInt, IsString, Max, Min } from "class-validator";
export class PresignUploadDto { @IsString() filename!: string; @IsString() @IsIn(["application/pdf", "image/jpeg", "image/png"]) mimeType!: string; @IsInt() @Min(1) @Max(10485760) size!: number; }
