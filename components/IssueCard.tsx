import Link from "next/link";
import { IssueDesk } from "@/lib/data";

export function IssueCard({ issue }: { issue: IssueDesk }) {
  return (
    <article className="card">
      <h3>{issue.title}</h3>
      <p>{issue.explanation}</p>
      <div className="trust-grid"><span className="badge">Sensitivity: {issue.sensitivity}</span><span className="badge">Source notes required</span></div>
      <Link className="card-link" href={`/issues/${issue.slug}`}>Open issue desk →</Link>
    </article>
  );
}
