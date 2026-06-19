import { SectionHeader } from "@/components/SectionHeader";
import { LgaCard } from "@/components/LgaCard";
import { lgas } from "@/lib/data";

export default function LgasPage() {
  return <main className="section"><div className="container"><SectionHeader eyebrow="Local Government Desk" title="LGA Directory">A directory of the 13 local government civic desks. Exact town, institution, and development facts should be added only after local verification.</SectionHeader><div className="grid three">{lgas.map(lga => <LgaCard key={lga.slug} lga={lga} />)}</div></div></main>;
}
