import { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, children, action }: { eyebrow?: string; title: string; children?: ReactNode; action?: ReactNode }) {
  return (
    <div className="section-header">
      <div className="section-title">
        {eyebrow && <div className="kicker">{eyebrow}</div>}
        <h2>{title}</h2>
        {children && <p>{children}</p>}
      </div>
      {action}
    </div>
  );
}
