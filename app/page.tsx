import Link from "next/link";
import { Badge } from "@/components/Badge";
import { SectionHeader } from "@/components/SectionHeader";
import { LgaCard } from "@/components/LgaCard";
import { IssueCard } from "@/components/IssueCard";
import { RecordCard } from "@/components/RecordCard";
import { SourceNote } from "@/components/SourceNote";
import { editorialPrinciples, issues, lgas, records } from "@/lib/data";

const trustLabels = ["State Ledger", "Local Government Desk", "Traditional Institutions", "Development Observatory", "Land and Communities", "Public Records", "Civic Briefings", "Peacebuilding Notes"];
const questionCards = ["What Is the Nasarawa Question?", "Statehood and Identity", "People, Towns and Corridors", "Lafia, Keffi, Akwanga, Nasarawa, Awe and Karu Axes", "Abuja Proximity and State Future", "Land, Agriculture and Urban Pressure", "Peacebuilding and Coexistence", "Public Records and Institutional Memory"];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="kicker">State Records, Development & Civic Identity Desk</div>
            <h1>Nasarawa Heartland</h1>
            <h2>Interactive Civic Observatory</h2>
            <p className="lede">Nasarawa Heartland documents the people, towns, institutions, traditional systems, public records, development issues, land questions, youth economy, education, agriculture, peacebuilding efforts, and civic life of Nasarawa State.</p>
            <div className="cta-row"><Link className="btn primary" href="/records">Explore the State Ledger</Link><Link className="btn secondary" href="/submit">Submit a Civic Record</Link></div>
            <div className="trust-grid">{trustLabels.map(label => <Badge key={label}>{label}</Badge>)}</div>
          </div>
          <div className="map-card">
            <div className="kicker">Central doctrine</div>
            <p className="lede">“Nasarawa is not merely a state on the map. It is a heartland of peoples, towns, institutions, land, culture, faith, agriculture, education, law, politics, and future possibility.”</p>
            <div className="map-grid">{["LGAs", "Records", "Issues", "Sources", "Corrections", "Peace"].map(x => <div className="map-tile" key={x}>{x}</div>)}</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Civic frame" title="The Nasarawa Question">Nasarawa is often described only by politics, proximity to Abuja, or mineral promise. But the state is deeper than that. It is a meeting ground of peoples, faiths, farms, markets, institutions, memory, land, law, and civic possibility.</SectionHeader>
          <div className="grid four">{questionCards.map(card => <article className="card flat" key={card}><h3>{card}</h3><p>Prepared for essays, records, public documents, and verified civic notes.</p></article>)}</div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader eyebrow="Interactive layer" title="From Website to Civic Observatory">Nasarawa Heartland is designed to grow from a public-facing state identity desk into an interactive civic records system with local government pages, issue desks, source notes, correction channels, and responsible editorial review.</SectionHeader>
          <div className="grid three">
            <article className="card"><h3>Local Government Pages</h3><p>Each LGA can hold civic profiles, development watch notes, records, and responsible community documentation.</p><Link className="card-link" href="/lgas">Open LGA directory →</Link></article>
            <article className="card"><h3>Issue Desks</h3><p>Records can be tagged by governance, land, agriculture, youth economy, education, peacebuilding, and more.</p><Link className="card-link" href="/issues">Open issue desks →</Link></article>
            <article className="card"><h3>State Ledger</h3><p>Records can carry source notes, verification status, sensitivity labels, and correction channels.</p><Link className="card-link" href="/records">Open state ledger →</Link></article>
          </div>
        </div>
      </section>

      <section id="lgas" className="section">
        <div className="container">
          <SectionHeader eyebrow="Local Government Desk" title="13 LGA civic desks" action={<Link className="btn light" href="/lgas">View all LGAs</Link>}>Each local government desk is a placeholder for verified civic profiles, development watch notes, public records, traditional institutions, and peacebuilding material.</SectionHeader>
          <div className="grid three">{lgas.slice(0, 6).map(lga => <LgaCard key={lga.slug} lga={lga} />)}</div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader eyebrow="Development Observatory" title="Public-interest issue desks" action={<Link className="btn light" href="/issues">View all issues</Link>}>Development is tracked as questions, records, services, corridors, and source-backed updates, not as praise-singing.</SectionHeader>
          <div className="grid three">{issues.slice(0, 6).map(issue => <IssueCard key={issue.slug} issue={issue} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="State Ledger" title="Sample record structure" action={<Link className="btn light" href="/records">Open records</Link>}>These are sober placeholders. Exact public facts should be inserted only after verification.</SectionHeader>
          <div className="grid three">{records.map(record => <RecordCard key={record.slug} record={record} />)}</div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader eyebrow="Land and Community Desk" title="Careful handling of sensitive civic questions">Land, boundary, indigeneity, settlement, grazing, and community identity questions require special care.</SectionHeader>
          <div className="warning">Land, boundary, indigeneity, settlement, grazing, and community identity questions require special care. Nasarawa Heartland will not publish incitement, collective blame, unsupported allegations, or private accusations.</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Editorial Charter" title="Verification, restraint and corrections">Where public claims affect reputations, communities, institutions, land, identity, or peace, Nasarawa Heartland requires verification, restraint, and correction options.</SectionHeader>
          <div className="grid three">{editorialPrinciples.map(p => <article className="card flat" key={p}><h3>{p}</h3><p>Applied through source notes, review queues, correction channels, and public-interest discipline.</p></article>)}</div>
          <SourceNote>Public claims should carry a source note. Sensitive claims should carry editorial caution and review history.</SourceNote>
        </div>
      </section>
    </main>
  );
}
