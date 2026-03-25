import { Sidebar } from "../../../components/Sidebar";
import { PageHeader } from "../../../components/PageHeader";
import { jobs, documents, applicants, messages, notifications } from "../../../lib/mock";
const links = [{ href: "/company/dashboard", label: "Dashboard" }, { href: "/company/profile", label: "Profile" }, { href: "/company/members", label: "Members" }, { href: "/company/jobs", label: "Jobs" }, { href: "/company/jobs/new", label: "Post Job" }, { href: "/company/candidates", label: "Candidates" }, { href: "/company/applicants", label: "Applicants" }, { href: "/company/messages", label: "Messages" }];
export default function Page() {
  return <main className="container dashboard"><Sidebar title="Company" links={links} /><section><PageHeader title="Messages" subtitle="Conversations with seafarers and recruitment follow-ups." /><div className="list">{messages.map((item) => <div className="card" key={item.subject}><div style={{fontWeight:800,fontSize:"20px"}}>{item.subject}</div><div className="muted" style={{marginTop:"8px"}}>From: {item.from}</div></div>)}</div></section></main>;
}
