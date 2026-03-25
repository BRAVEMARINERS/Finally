type Props = { title: string; company: string; vesselType: string; location: string; salary: string; match?: string; href?: string };
export function JobCard({ title, company, vesselType, location, salary, match, href = "#" }: Props) {
  return (
    <a href={href} className="card" style={{ display: "block" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "14px" }}>
        <div>
          <div style={{ fontSize: "22px", fontWeight: 800 }}>{title}</div>
          <div className="muted" style={{ marginTop: "8px" }}>{company}</div>
        </div>
        {match ? <span className="badge">{match} match</span> : null}
      </div>
      <div className="list" style={{ marginTop: "14px" }}>
        <div className="list-item">{vesselType}</div>
        <div className="list-item">{location}</div>
        <div className="list-item">{salary}</div>
      </div>
    </a>
  );
}
