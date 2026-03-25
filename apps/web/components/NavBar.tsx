export function NavBar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="/" className="brand">
          <div className="brand-logo">⚓</div>
          <div>
            <div className="brand-kicker">Global maritime talent</div>
            <div className="brand-name">Bravemarines</div>
          </div>
        </a>
        <nav className="nav-links">
          <a href="/jobs">Jobs</a>
          <a href="/register">Register</a>
          <a href="/seafarer/dashboard">Seafarer</a>
          <a href="/company/dashboard">Company</a>
          <a href="/admin">Admin</a>
        </nav>
      </div>
    </header>
  );
}
