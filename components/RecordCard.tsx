import Link from "next/link";
import { RecordItem } from "@/lib/data";
import { VerificationBadge } from "./VerificationBadge";

export function RecordCard({ record }: { record: RecordItem }) {
  return (
    <article className="card">
      <div className="trust-grid"><span className="badge">{record.recordType}</span><VerificationBadge status={record.verificationStatus} /></div>
      <h3>{record.title}</h3>
      <p>{record.summary}</p>
      <div className="meta">
        <b>LGA/Corridor</b><span>{record.lga}</span>
        <b>Issue desk</b><span>{record.issue}</span>
        <b>Date</b><span>{record.date}</span>
        <b>Sensitivity</b><span>{record.sensitivity}</span>
        <b>Source note</b><span>{record.sourceNote}</span>
      </div>
      <Link className="card-link" href={`/records/${record.slug}`}>Read record →</Link>
    </article>
  );
}
