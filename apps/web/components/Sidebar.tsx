type Props = { title: string; links: Array<{ href: string; label: string }> };
export function Sidebar({ title, links }: Props) {
  return (
    <aside className="sidebar">
      <div style={{ fontSize: "18px", fontWeight: 800, marginBottom: "14px" }}>{title}</div>
      {links.map((link) => (
        <a key={link.href} href={link.href}>{link.label}</a>
      ))}
    </aside>
  );
}
