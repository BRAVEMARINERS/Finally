type Props = { value: string; label: string };
export function StatCard({ value, label }: Props) {
  return (
    <div className="card">
      <div style={{ fontSize: "32px", fontWeight: 800 }}>{value}</div>
      <div className="muted" style={{ marginTop: "8px" }}>{label}</div>
    </div>
  );
}
