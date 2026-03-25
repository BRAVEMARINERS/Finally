import { Sidebar } from "../../../components/Sidebar";
import { PageHeader } from "../../../components/PageHeader";
import { jobs, documents, applicants, messages, notifications } from "../../../lib/mock";
const links = [{ href: "/seafarer/dashboard", label: "Dashboard" }, { href: "/seafarer/profile", label: "Profile" }, { href: "/seafarer/documents", label: "Documents" }, { href: "/seafarer/applications", label: "Applications" }, { href: "/seafarer/messages", label: "Messages" }, { href: "/seafarer/notifications", label: "Notifications" }];
export default function Page() {
  return <main className="container dashboard"><Sidebar title="Seafarer" links={links} /><section><PageHeader title="Seafarer dashboard" subtitle="Track profile completion, job matches, and expiring documents." /><div className="grid-3"><div className="card"><div className="muted">Profile strength</div><div style={{fontSize:"34px",fontWeight:800,marginTop:"8px"}}>88%</div></div><div className="card"><div className="muted">New matches</div><div style={{fontSize:"34px",fontWeight:800,marginTop:"8px"}}>12</div></div><div className="card"><div className="muted">Expiry alerts</div><div style={{fontSize:"34px",fontWeight:800,marginTop:"8px"}}>3</div></div></div></section></main>;
}
