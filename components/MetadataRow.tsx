export function MetadataRow({ items }: { items: Array<[string, string]> }) {
  return <div className="meta">{items.map(([k, v]) => <><b key={k + '-k'}>{k}</b><span key={k + '-v'}>{v}</span></>)}</div>;
}
