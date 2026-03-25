import { Sidebar } from "../../../components/Sidebar";
import { PageHeader } from "../../../components/PageHeader";
import { jobs, documents, applicants, messages, notifications } from "../../../lib/mock";
const links = [{ href: "/company/dashboard", label: "Dashboard" }, { href: "/company/profile", label: "Profile" }, { href: "/company/members", label: "Members" }, { href: "/company/jobs", label: "Jobs" }, { href: "/company/jobs/new", label: "Post Job" }, { href: "/company/candidates", label: "Candidates" }, { href: "/company/applicants", label: "Applicants" }, { href: "/company/messages", label: "Messages" }];
export default function Page() {
  return <main className="container dashboard"><Sidebar title="Company" links={links} /><section><PageHeader title="Manage jobs" subtitle="Monitor published vacancies and edit your maritime openings." /><div className="list">{jobs.map((job) => <div className="card" key={job.id}><div style={{fontSize:"22px",fontWeight:800}}>{job.title}</div><div className="muted" style={{marginTop:"8px"}}>{job.company} · {job.location}</div></div>)}</div></section></main>;
}
