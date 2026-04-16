import { Link, NavLink, Outlet } from 'react-router-dom';

const navItems = [
  ['/', 'Home'],
  ['/destinations', 'Destinations'],
  ['/packages', 'Packages'],
  ['/about', 'About'],
  ['/contact', 'Contact']
] as const;

export function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link className="brand" to="/">
            KUBO<span>VISTA</span>
          </Link>
          <nav className="nav-links">
            {navItems.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === '/'}>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <Outlet />

      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} Kubovista Tours. Premium journeys, professionally curated.</p>
        </div>
      </footer>
    </>
  );
}
