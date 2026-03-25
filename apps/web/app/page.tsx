import { StatCard } from "../components/StatCard";
const features = ["AI CV Builder", "Crew Search", "Expiry Alerts", "Verified Documents", "Messaging", "Admin Moderation"];
export default function HomePage() {
  return (
    <main>
      <section className="hero container">
        <div className="grid-2">
          <div>
            <div className="kicker">Premium maritime hiring platform</div>
            <h1 className="hero-title">Bravemarines helps seafarers and maritime companies connect faster and hire smarter.</h1>
            <p className="hero-copy">Create a maritime profile, monitor expiring certificates, generate AI-powered CVs, apply to jobs, and manage recruitment through premium dashboards built for the global shipping industry.</p>
            <div className="actions">
              <a className="button primary" href="/register">Join as Seafarer</a>
              <a className="button" href="/register/company">Register Company</a>
            </div>
            <div className="grid-4" style={{ marginTop: "32px" }}>
              <StatCard value="58K+" label="Seafarer profiles" />
              <StatCard value="1,240+" label="Verified companies" />
              <StatCard value="3,900+" label="Open jobs" />
              <StatCard value="220K+" label="Documents monitored" />
            </div>
          </div>
          <div className="card">
            <span className="badge">MVP preview</span>
            <h2 style={{ marginTop: "14px", fontSize: "28px" }}>Live platform snapshot</h2>
            <p className="muted" style={{ lineHeight: 1.8 }}>AI CV generation, recruiter search, profile completion, and expiry alerts in one place.</p>
            <div className="grid-3" style={{ marginTop: "16px" }}>
              <div className="card tight"><div className="muted">Profile strength</div><div style={{ fontSize: "34px", fontWeight: 800, marginTop: "8px" }}>88%</div></div>
              <div className="card tight"><div className="muted">New matches</div><div style={{ fontSize: "34px", fontWeight: 800, marginTop: "8px" }}>12</div></div>
              <div className="card tight"><div className="muted">Expiry alerts</div><div style={{ fontSize: "34px", fontWeight: 800, marginTop: "8px" }}>3</div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ paddingBottom: "56px" }}>
        <h2 className="page-title">Core modules</h2>
        <p className="page-subtitle">Everything needed for a luxury maritime recruitment MVP.</p>
        <div className="grid-3" style={{ marginTop: "18px" }}>
          {features.map((item) => (
            <div className="card" key={item}>
              <div style={{ fontWeight: 800, fontSize: "20px" }}>{item}</div>
              <p className="muted" style={{ lineHeight: 1.8 }}>Bravemarines starter module ready to be expanded into a production workflow.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
