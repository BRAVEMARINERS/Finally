import { PageHeader } from "../../components/PageHeader";
export default function LoginPage() {
  return <main className="container page-wrap"><PageHeader title="Login" subtitle="Sign in as seafarer, company, or admin." /><div className="card" style={{ maxWidth: "640px" }}><div className="form-grid"><div className="field" style={{ gridColumn: "1 / -1" }}><label>Email</label><input className="input" placeholder="you@example.com" /></div><div className="field" style={{ gridColumn: "1 / -1" }}><label>Password</label><input className="input" type="password" placeholder="••••••••" /></div></div><div className="actions"><button className="button primary">Sign in</button><a className="button" href="/register">Create account</a></div></div></main>;
}
