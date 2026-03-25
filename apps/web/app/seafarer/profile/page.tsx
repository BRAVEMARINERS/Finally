import { Sidebar } from "../../../components/Sidebar";
import { PageHeader } from "../../../components/PageHeader";
import { jobs, documents, applicants, messages, notifications } from "../../../lib/mock";
const links = [{ href: "/seafarer/dashboard", label: "Dashboard" }, { href: "/seafarer/profile", label: "Profile" }, { href: "/seafarer/documents", label: "Documents" }, { href: "/seafarer/applications", label: "Applications" }, { href: "/seafarer/messages", label: "Messages" }, { href: "/seafarer/notifications", label: "Notifications" }];
export default function Page() {
  return <main className="container dashboard"><Sidebar title="Seafarer" links={links} /><section><PageHeader title="My profile" subtitle="Your maritime career identity, experience, rank, and preferences." /><div className="card"><div className="form-grid"><div className="field"><label>Full name</label><input className="input" defaultValue="Ahmed Salem" /></div><div className="field"><label>Current rank</label><input className="input" defaultValue="ETO" /></div><div className="field"><label>Department</label><input className="input" defaultValue="Electrical" /></div><div className="field"><label>Nationality</label><input className="input" defaultValue="Egyptian" /></div></div></div></section></main>;
}
