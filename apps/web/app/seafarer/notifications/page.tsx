import { Sidebar } from "../../../components/Sidebar";
import { PageHeader } from "../../../components/PageHeader";
import { jobs, documents, applicants, messages, notifications } from "../../../lib/mock";
const links = [{ href: "/seafarer/dashboard", label: "Dashboard" }, { href: "/seafarer/profile", label: "Profile" }, { href: "/seafarer/documents", label: "Documents" }, { href: "/seafarer/applications", label: "Applications" }, { href: "/seafarer/messages", label: "Messages" }, { href: "/seafarer/notifications", label: "Notifications" }];
export default function Page() {
  return <main className="container dashboard"><Sidebar title="Seafarer" links={links} /><section><PageHeader title="Notifications" subtitle="Recent activity, matches, and expiry reminders." /><div className="list">{notifications.map((item) => <div className="card" key={item.title}><div style={{fontWeight:800}}>{item.title}</div><div className="muted" style={{marginTop:"6px"}}>Type: {item.type}</div></div>)}</div></section></main>;
}
