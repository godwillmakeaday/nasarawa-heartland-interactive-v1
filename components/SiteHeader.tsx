import Link from "next/link";

const links = [
  ["Home", "/"],
  ["LGAs", "/lgas"],
  ["Issues", "/issues"],
  ["Records", "/records"],
  ["Submit", "/submit"],
  ["Standards", "/editorial-standards"]
];

export function SiteHeader() {
  return (
    <header className="topbar">
      <nav className="nav" aria-label="Main navigation">
        <Link href="/" className="brand"><span className="brand-mark">NH</span><span>Nasarawa Heartland</span></Link>
        <div className="nav-links">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </div>
      </nav>
    </header>
  );
}
