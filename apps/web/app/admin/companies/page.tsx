import { Sidebar } from "../../../components/Sidebar";
import { PageHeader } from "../../../components/PageHeader";
import { jobs, documents, applicants, messages, notifications } from "../../../lib/mock";
const links = [{ href: "/admin", label: "Dashboard" }, { href: "/admin/companies", label: "Companies" }, { href: "/admin/companies/pending", label: "Pending" }, { href: "/admin/users", label: "Users" }, { href: "/admin/jobs", label: "Jobs" }, { href: "/admin/reports", label: "Reports" }];
export default function Page() {
  return <main className="container dashboard"><Sidebar title="Admin" links={links} /><section><PageHeader title="Companies" subtitle="Admin companies management starter page." /><div className="card"><p className="muted">This page is ready for management logic.</p></div></section></main>;
}
