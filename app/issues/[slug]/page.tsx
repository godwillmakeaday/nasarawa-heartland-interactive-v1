import Link from "next/link";
import { notFound } from "next/navigation";
import { RecordCard } from "@/components/RecordCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SensitivityNotice } from "@/components/SensitivityNotice";
import { issues, records } from "@/lib/data";

export function generateStaticParams() { return issues.map(issue => ({ slug: issue.slug })); }

export default function IssueDetailPage({ params }: { params: { slug: string } }) {
  const issue = issues.find(item => item.slug === params.slug);
  if (!issue) notFound();
  const issueRecords = records.filter(record => record.issue === issue.title || record.relatedIssues.includes(issue.title));
  return <main className="section"><div className="container"><SectionHeader eyebrow="Issue Desk" title={issue.title}>{issue.explanation}</SectionHeader><div className="grid two"><article className="card"><h3>Why this issue matters</h3><p>{issue.why}</p><div className="meta"><b>Sensitivity level</b><span>{issue.sensitivity}</span><b>LGAs affected</b><span>Awaiting verified local tagging.</span><b>Editorial caution</b><span>Source notes required for public claims.</span></div><Link className="card-link" href={`/submit?issue=${issue.slug}`}>Submit a record for this issue →</Link></article><SensitivityNotice strong={issue.caution} /></div><div className="section"><SectionHeader title="Connected records" /><div className="grid two">{issueRecords.map(record => <RecordCard key={record.slug} record={record} />)}</div></div></div></main>;
}
