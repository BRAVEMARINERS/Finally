type Props = { title: string; subtitle: string };
export function PageHeader({ title, subtitle }: Props) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h1 className="page-title">{title}</h1>
      <p className="page-subtitle">{subtitle}</p>
    </div>
  );
}
