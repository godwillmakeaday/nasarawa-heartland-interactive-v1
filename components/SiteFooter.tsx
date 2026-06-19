import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Nasarawa Heartland</h3>
          <p>Nasarawa Heartland is a public-interest documentation platform for state records, civic identity, development issues, local institutions, and responsible reporting across Nasarawa State.</p>
        </div>
        <div><h4>Platform</h4><Link href="/about">About</Link><Link href="/editorial-standards">Editorial Standards</Link><Link href="/submit">Submit</Link></div>
        <div><h4>State Ledger</h4><Link href="/records">Records</Link><Link href="/issues/public-records">Public Records</Link><Link href="/issues/governance">Governance</Link></div>
        <div><h4>Local Desk</h4><Link href="/lgas">LGAs</Link><Link href="/issues/land-and-communities">Land Desk</Link><Link href="/issues/traditional-institutions">Traditional Institutions</Link></div>
        <div><h4>Observatory</h4><Link href="/issues">Development Issues</Link><Link href="/issues/youth-economy">Youth Economy</Link><Link href="/issues/faith-and-peacebuilding">Peacebuilding</Link></div>
      </div>
    </footer>
  );
}
