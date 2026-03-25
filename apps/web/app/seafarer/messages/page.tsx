import { Sidebar } from "../../../components/Sidebar";
import { PageHeader } from "../../../components/PageHeader";
import { jobs, documents, applicants, messages, notifications } from "../../../lib/mock";
const links = [{ href: "/seafarer/dashboard", label: "Dashboard" }, { href: "/seafarer/profile", label: "Profile" }, { href: "/seafarer/documents", label: "Documents" }, { href: "/seafarer/applications", label: "Applications" }, { href: "/seafarer/messages", label: "Messages" }, { href: "/seafarer/notifications", label: "Notifications" }];
export default function Page() {
  return <main className="container dashboard"><Sidebar title="Seafarer" links={links} /><section><PageHeader title="Messages" subtitle="Communicate with maritime recruiters and companies." /><div className="list">{messages.map((item) => <div className="card" key={item.subject}><div style={{fontWeight:800,fontSize:"20px"}}>{item.from}</div><div style={{marginTop:"8px"}}>{item.subject}</div><div className="muted" style={{marginTop:"8px",lineHeight:1.8}}>{item.preview}</div></div>)}</div></section></main>;
}
