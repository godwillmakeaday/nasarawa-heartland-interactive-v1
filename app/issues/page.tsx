import { IssueCard } from "@/components/IssueCard";
import { SectionHeader } from "@/components/SectionHeader";
import { issues } from "@/lib/data";

export default function IssuesPage() {
  return <main className="section"><div className="container"><SectionHeader eyebrow="Development Observatory" title="Issue Desks">Each issue desk tracks records and development questions with source-note discipline and public-interest restraint.</SectionHeader><div className="grid three">{issues.map(issue => <IssueCard key={issue.slug} issue={issue} />)}</div></div></main>;
}
