import { PageHeader } from "../../components/PageHeader";
export default function ResetPasswordPage() {
  return <main className="container page-wrap"><PageHeader title="Reset password" subtitle="Set a new password for your account." /><div className="card" style={{ maxWidth: "640px" }}><div className="field"><label>New password</label><input className="input" type="password" /></div><div className="field"><label>Confirm password</label><input className="input" type="password" /></div><div className="actions"><button className="button primary">Update password</button></div></div></main>;
}
