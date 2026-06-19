export function SensitivityNotice({ strong = false }: { strong?: boolean }) {
  return <div className={strong ? "warning" : "note"}>{strong ? "This desk requires careful verification. Nasarawa Heartland does not publish incitement, collective blame, private accusations, or unsupported allegations." : "Records here require source notes and editorial restraint before publication."}</div>;
}
