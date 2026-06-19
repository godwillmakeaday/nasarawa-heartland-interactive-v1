import { SectionHeader } from "@/components/SectionHeader";
import { editorialPrinciples } from "@/lib/data";

export default function EditorialStandardsPage() {
  return <main className="section"><div className="container"><SectionHeader eyebrow="Editorial Charter" title="Verification, restraint and correction options">Where public claims affect reputations, communities, institutions, land, identity, or peace, Nasarawa Heartland requires verification, restraint, and correction options.</SectionHeader><div className="grid three">{editorialPrinciples.map(p => <article className="card" key={p}><h3>{p}</h3><p>This principle guides publication, review, source notes, and correction handling.</p></article>)}</div></div></main>;
}
