export function VerificationBadge({ status }: { status: string }) {
  return <span className="badge">Verification: {status}</span>;
}
