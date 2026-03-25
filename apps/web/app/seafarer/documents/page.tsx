import { Sidebar } from "../../../components/Sidebar";
import { PageHeader } from "../../../components/PageHeader";
import { jobs, documents, applicants, messages, notifications } from "../../../lib/mock";
const links = [{ href: "/seafarer/dashboard", label: "Dashboard" }, { href: "/seafarer/profile", label: "Profile" }, { href: "/seafarer/documents", label: "Documents" }, { href: "/seafarer/applications", label: "Applications" }, { href: "/seafarer/messages", label: "Messages" }, { href: "/seafarer/notifications", label: "Notifications" }];
export default function Page() {
  return <main className="container dashboard"><Sidebar title="Seafarer" links={links} /><section><PageHeader title="Documents" subtitle="Track passport, medical, seaman book, and certification validity." /><div className="card"><div className="list">{documents.map((doc) => <div key={doc.type} className="list-item"><div style={{display:"flex",justifyContent:"space-between",gap:"12px"}}><div><div style={{fontWeight:800}}>{doc.type}</div><div className="muted" style={{marginTop:"6px"}}>Expires: {doc.expiry}</div></div><span className={doc.alert ? "badge danger" : "badge success"}>{doc.status}</span></div></div>)}</div></div></section></main>;
}
