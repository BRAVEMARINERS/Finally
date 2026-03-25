import { Sidebar } from "../../../components/Sidebar";
import { PageHeader } from "../../../components/PageHeader";
import { jobs, documents, applicants, messages, notifications } from "../../../lib/mock";
const links = [{ href: "/company/dashboard", label: "Dashboard" }, { href: "/company/profile", label: "Profile" }, { href: "/company/members", label: "Members" }, { href: "/company/jobs", label: "Jobs" }, { href: "/company/jobs/new", label: "Post Job" }, { href: "/company/candidates", label: "Candidates" }, { href: "/company/applicants", label: "Applicants" }, { href: "/company/messages", label: "Messages" }];
export default function Page() {
  return <main className="container dashboard"><Sidebar title="Company" links={links} /><section><PageHeader title="Company dashboard" subtitle="Manage vacancies, applicants, and recruiter activity." /><div className="grid-3"><div className="card"><div className="muted">Open jobs</div><div style={{fontSize:"34px",fontWeight:800,marginTop:"8px"}}>14</div></div><div className="card"><div className="muted">Applicants</div><div style={{fontSize:"34px",fontWeight:800,marginTop:"8px"}}>63</div></div><div className="card"><div className="muted">Unread messages</div><div style={{fontSize:"34px",fontWeight:800,marginTop:"8px"}}>7</div></div></div></section></main>;
}
