import { Sidebar } from "../../../components/Sidebar";
import { PageHeader } from "../../../components/PageHeader";
import { jobs, documents, applicants, messages, notifications } from "../../../lib/mock";
const links = [{ href: "/admin", label: "Dashboard" }, { href: "/admin/companies", label: "Companies" }, { href: "/admin/companies/pending", label: "Pending" }, { href: "/admin/users", label: "Users" }, { href: "/admin/jobs", label: "Jobs" }, { href: "/admin/reports", label: "Reports" }];
export default function Page() {
  return <main className="container dashboard"><Sidebar title="Admin" links={links} /><section><PageHeader title="Admin dashboard" subtitle="Platform overview, company review, and moderation." /><div className="grid-3"><div className="card"><div className="muted">Pending companies</div><div style={{fontSize:"34px",fontWeight:800,marginTop:"8px"}}>18</div></div><div className="card"><div className="muted">Flagged reports</div><div style={{fontSize:"34px",fontWeight:800,marginTop:"8px"}}>6</div></div><div className="card"><div className="muted">Jobs under review</div><div style={{fontSize:"34px",fontWeight:800,marginTop:"8px"}}>4</div></div></div></section></main>;
}
