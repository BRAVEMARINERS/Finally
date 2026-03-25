import { Injectable } from "@nestjs/common";
import { RegisterSeafarerDto } from "./dto/register-seafarer.dto";
import { RegisterCompanyDto } from "./dto/register-company.dto";
import { LoginDto } from "./dto/login.dto";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { VerifyEmailDto } from "./dto/verify-email.dto";
@Injectable()
export class AuthService {
  registerSeafarer(payload: RegisterSeafarerDto) { return { message: "Register seafarer placeholder", payload }; }
  registerCompany(payload: RegisterCompanyDto) { return { message: "Register company placeholder", payload }; }
  login(payload: LoginDto) { return { message: "Login placeholder", payload }; }
  me() { return { id: "demo-user", role: "SEAFARER" }; }
  forgotPassword(payload: ForgotPasswordDto) { return { message: "Password reset email requested", payload }; }
  resetPassword(payload: ResetPasswordDto) { return { message: "Password reset completed", payload }; }
  verifyEmail(payload: VerifyEmailDto) { return { message: "Email verification completed", payload }; }
  resendVerification() { return { message: "Verification email sent" }; }
  refresh() { return { message: "Refresh token placeholder" }; }
  logout() { return { message: "Logout placeholder" }; }
}
