import { Sidebar } from "../../../components/Sidebar";
import { PageHeader } from "../../../components/PageHeader";
import { jobs, documents, applicants, messages, notifications } from "../../../lib/mock";
const links = [{ href: "/company/dashboard", label: "Dashboard" }, { href: "/company/profile", label: "Profile" }, { href: "/company/members", label: "Members" }, { href: "/company/jobs", label: "Jobs" }, { href: "/company/jobs/new", label: "Post Job" }, { href: "/company/candidates", label: "Candidates" }, { href: "/company/applicants", label: "Applicants" }, { href: "/company/messages", label: "Messages" }];
export default function Page() {
  return <main className="container dashboard"><Sidebar title="Company" links={links} /><section><PageHeader title="Company members" subtitle="Manage company access roles and permissions." /><div className="list"><div className="card"><div style={{fontWeight:800,fontSize:"20px"}}>Mostafa Khfage</div><div className="muted" style={{marginTop:"8px"}}>OWNER</div></div><div className="card"><div style={{fontWeight:800,fontSize:"20px"}}>Sarah Ahmed</div><div className="muted" style={{marginTop:"8px"}}>RECRUITER</div></div></div></section></main>;
}
