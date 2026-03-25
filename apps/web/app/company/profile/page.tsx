import { Sidebar } from "../../../components/Sidebar";
import { PageHeader } from "../../../components/PageHeader";
import { jobs, documents, applicants, messages, notifications } from "../../../lib/mock";
const links = [{ href: "/company/dashboard", label: "Dashboard" }, { href: "/company/profile", label: "Profile" }, { href: "/company/members", label: "Members" }, { href: "/company/jobs", label: "Jobs" }, { href: "/company/jobs/new", label: "Post Job" }, { href: "/company/candidates", label: "Candidates" }, { href: "/company/applicants", label: "Applicants" }, { href: "/company/messages", label: "Messages" }];
export default function Page() {
  return <main className="container dashboard"><Sidebar title="Company" links={links} /><section><PageHeader title="Company profile" subtitle="Show candidates who you are and what kind of maritime hiring you do." /><div className="card"><div className="form-grid"><div className="field"><label>Company name</label><input className="input" defaultValue="Oceanic Manning" /></div><div className="field"><label>Official email</label><input className="input" defaultValue="crew@oceanic.example" /></div></div></div></section></main>;
}
