import { Sidebar } from "../../../components/Sidebar";
import { PageHeader } from "../../../components/PageHeader";
import { jobs, documents, applicants, messages, notifications } from "../../../lib/mock";
const links = [{ href: "/seafarer/dashboard", label: "Dashboard" }, { href: "/seafarer/profile", label: "Profile" }, { href: "/seafarer/documents", label: "Documents" }, { href: "/seafarer/applications", label: "Applications" }, { href: "/seafarer/messages", label: "Messages" }, { href: "/seafarer/notifications", label: "Notifications" }];
export default function Page() {
  return <main className="container dashboard"><Sidebar title="Seafarer" links={links} /><section><PageHeader title="Applications" subtitle="Track every role you have applied for." /><div className="list">{jobs.map((job) => <div className="card" key={job.id}><div style={{fontSize:"22px",fontWeight:800}}>{job.title}</div><div className="muted" style={{marginTop:"8px"}}>{job.company} · {job.location}</div></div>)}</div></section></main>;
}
