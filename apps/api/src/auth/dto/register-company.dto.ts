import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";
export class RegisterCompanyDto { @IsEmail() officialEmail!: string; @IsString() @MinLength(8) password!: string; @IsString() companyName!: string; @IsOptional() @IsString() country?: string; @IsOptional() @IsString() phone?: string; }
