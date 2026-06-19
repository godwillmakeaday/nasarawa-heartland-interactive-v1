import Link from "next/link";
import { Lga } from "@/lib/data";

export function LgaCard({ lga }: { lga: Lga }) {
  return (
    <article className="card">
      <h3>{lga.name}</h3>
      <p>{lga.profile}</p>
      <div className="meta">
        <b>Major towns</b><span>{lga.towns}</span>
        <b>Development watch</b><span>{lga.developmentWatch}</span>
        <b>Public records</b><span>{lga.publicRecords}</span>
        <b>Source status</b><span>{lga.sourceStatus}</span>
      </div>
      <Link className="card-link" href={`/lgas/${lga.slug}`}>Open {lga.name} Desk →</Link>
    </article>
  );
}
