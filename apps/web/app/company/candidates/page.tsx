import { Sidebar } from "../../../components/Sidebar";
import { PageHeader } from "../../../components/PageHeader";
import { jobs, documents, applicants, messages, notifications } from "../../../lib/mock";
const links = [{ href: "/company/dashboard", label: "Dashboard" }, { href: "/company/profile", label: "Profile" }, { href: "/company/members", label: "Members" }, { href: "/company/jobs", label: "Jobs" }, { href: "/company/jobs/new", label: "Post Job" }, { href: "/company/candidates", label: "Candidates" }, { href: "/company/applicants", label: "Applicants" }, { href: "/company/messages", label: "Messages" }];
export default function Page() {
  return <main className="container dashboard"><Sidebar title="Company" links={links} /><section><PageHeader title="Candidate search" subtitle="Browse and shortlist maritime professionals." /><div className="list">{applicants.map((item) => <div className="card" key={item.name}><div style={{display:"flex",justifyContent:"space-between",gap:"12px"}}><div><div style={{fontWeight:800,fontSize:"22px"}}>{item.name}</div><div className="muted" style={{marginTop:"8px"}}>{item.rank} · {item.availability}</div></div><span className="badge">{item.score} score</span></div></div>)}</div></section></main>;
}
