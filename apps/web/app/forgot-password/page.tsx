import { PageHeader } from "../../components/PageHeader";
export default function ForgotPasswordPage() {
  return <main className="container page-wrap"><PageHeader title="Forgot password" subtitle="Request a secure password reset link." /><div className="card" style={{ maxWidth: "640px" }}><div className="field"><label>Email</label><input className="input" placeholder="you@example.com" /></div><div className="actions"><button className="button primary">Send reset link</button></div></div></main>;
}
