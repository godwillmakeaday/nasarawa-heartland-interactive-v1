import { RecordCard } from "@/components/RecordCard";
import { SectionHeader } from "@/components/SectionHeader";
import { issues, lgas, records } from "@/lib/data";

export default function RecordsPage() {
  return <main className="section"><div className="container"><SectionHeader eyebrow="State Ledger" title="Records Directory">A registry-style directory for public records, notices, civic updates, clarifications, and development memory.</SectionHeader><div className="card"><div className="form-grid"><select><option>LGA</option>{lgas.map(l => <option key={l.slug}>{l.name}</option>)}</select><select><option>Issue</option>{issues.map(i => <option key={i.slug}>{i.title}</option>)}</select><select><option>Record type</option><option>Public notice</option><option>Traditional institution update</option><option>Community development project</option></select><select><option>Verification status</option><option>Unverified placeholder</option><option>Source required</option><option>Legal/Risk review required</option></select><select><option>Sensitivity level</option><option>Low</option><option>Moderate</option><option>High</option></select><input type="date" /></div></div><div className="section"><div className="grid three">{records.map(record => <RecordCard key={record.slug} record={record} />)}</div></div></div></main>;
}
