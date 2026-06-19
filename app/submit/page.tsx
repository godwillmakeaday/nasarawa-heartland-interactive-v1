import { SectionHeader } from "@/components/SectionHeader";
import { SubmitForm } from "@/components/SubmitForm";

export default function SubmitPage() {
  return <main className="section"><div className="container"><SectionHeader eyebrow="Submit to the Desk" title="Submit a Civic Record">Submissions do not publish automatically. They are reviewed for verification, public interest, safety, privacy, and editorial restraint.</SectionHeader><div className="grid two"><div className="card"><SubmitForm /></div><div className="warning">Do not submit gossip, incitement, private personal data, unsupported allegations, or material likely to inflame community tension. Land, identity, security, and traditional institution claims require special care.</div></div></div></main>;
}
