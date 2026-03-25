import { Sidebar } from "../../../components/Sidebar";
import { PageHeader } from "../../../components/PageHeader";
import { jobs, documents, applicants, messages, notifications } from "../../../lib/mock";
const links = [{ href: "/admin", label: "Dashboard" }, { href: "/admin/companies", label: "Companies" }, { href: "/admin/companies/pending", label: "Pending" }, { href: "/admin/users", label: "Users" }, { href: "/admin/jobs", label: "Jobs" }, { href: "/admin/reports", label: "Reports" }];
export default function Page() {
  return <main className="container dashboard"><Sidebar title="Admin" links={links} /><section><PageHeader title="Pending companies" subtitle="Review company verification queue." /><div className="list"><div className="card"><div style={{fontWeight:800}}>Oceanic Manning</div><div className="muted" style={{marginTop:"8px"}}>Pending verification</div></div></div></section></main>;
}
