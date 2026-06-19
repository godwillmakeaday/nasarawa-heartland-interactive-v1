import { issues, lgas } from "@/lib/data";

export function SubmitForm() {
  return (
    <form className="form">
      <div className="form-grid">
        <label>Submission type<select><option>Public notice</option><option>Community development update</option><option>Traditional institution update</option><option>LGA record</option><option>Educational institution update</option><option>Land/community issue</option><option>Correction or clarification</option><option>Civic briefing suggestion</option><option>Historical or cultural material</option></select></label>
        <label>Title<input placeholder="Clear civic record title" /></label>
        <label>LGA/corridor<select>{lgas.map(l => <option key={l.slug}>{l.name}</option>)}</select></label>
        <label>Issue desk<select>{issues.map(i => <option key={i.slug}>{i.title}</option>)}</select></label>
        <label>Location<input placeholder="Town, community, corridor or institution" /></label>
        <label>Date<input type="date" /></label>
      </div>
      <label>Summary<textarea placeholder="State what happened, who issued the record, and why it may be of public interest. Avoid accusations without sources." /></label>
      <div className="form-grid">
        <label>Source/document reference<input placeholder="Public notice, letter, minute, link, file reference or source note" /></label>
        <label>Upload placeholder<input type="file" disabled /></label>
        <label>Verification contact<input placeholder="Name/office/email for editorial verification" /></label>
        <label>Sensitivity level<select><option>Low</option><option>Moderate</option><option>High</option><option>Legal/Risk review required</option></select></label>
      </div>
      <label className="check"><input type="checkbox" /> I consent to editorial review and understand this submission does not publish automatically.</label>
      <label className="check"><input type="checkbox" /> I declare that this submission is made in good faith and should be handled with public-interest restraint.</label>
      <div className="note">Online submission review system coming soon. For now, submissions may be reviewed through approved editorial channels.</div>
      <button className="btn light" type="button">Submit for editorial review</button>
    </form>
  );
}
