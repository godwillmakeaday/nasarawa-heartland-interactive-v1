import Link from "next/link";
import { notFound } from "next/navigation";
import { MetadataRow } from "@/components/MetadataRow";
import { SectionHeader } from "@/components/SectionHeader";
import { SourceNote } from "@/components/SourceNote";
import { records } from "@/lib/data";

export function generateStaticParams() { return records.map(record => ({ slug: record.slug })); }

export default function RecordDetailPage({ params }: { params: { slug: string } }) {
  const record = records.find(item => item.slug === params.slug);
  if (!record) notFound();
  return <main className="section"><div className="container"><SectionHeader eyebrow={record.recordType} title={record.title}>{record.summary}</SectionHeader><div className="grid two"><article className="card"><h3>Record metadata</h3><MetadataRow items={[["Record type", record.recordType], ["LGA/Corridor", record.lga], ["Issue desk", record.issue], ["Date", record.date], ["Verification", record.verificationStatus], ["Sensitivity", record.sensitivity], ["Editorial status", record.editorialStatus]]} /></article><SourceNote>{record.sourceNote}</SourceNote></div><section className="section"><div className="grid two"><article className="card"><h3>Context</h3><p>{record.context}</p></article><article className="card"><h3>Related references</h3><p><strong>LGAs:</strong> {record.relatedLgas.join(", ")}</p><p><strong>Issues:</strong> {record.relatedIssues.join(", ")}</p><Link href="/submit" className="card-link">Request correction or clarification →</Link></article></div></section><div className="warning">Source caution: this prototype uses placeholders. Live records should be published only after review of source notes, sensitivity, privacy, and correction options.</div></div></main>;
}
