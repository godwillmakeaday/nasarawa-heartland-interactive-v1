import Link from "next/link";
import { notFound } from "next/navigation";
import { EmptyState } from "@/components/EmptyState";
import { SectionHeader } from "@/components/SectionHeader";
import { SensitivityNotice } from "@/components/SensitivityNotice";
import { records, lgas } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return lgas.map((lga) => ({ slug: lga.slug }));
}

export default async function LgaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const lga = lgas.find((item) => item.slug === slug);

  if (!lga) notFound();

  const localRecords = records.filter((record) =>
    record.relatedLgas.includes(lga.name)
  );

  return (
    <main className="section">
      <div className="container">
        <SectionHeader eyebrow="LGA Desk" title={`${lga.name} Civic Desk`}>
          {lga.profile}
        </SectionHeader>

        <div className="grid two">
          <article className="card">
            <h3>Civic profile</h3>
            <p>{lga.profile}</p>

            <div className="meta">
              <b>Corridor notes</b>
              <span>{lga.towns}</span>

              <b>Development watch</b>
              <span>{lga.developmentWatch}</span>

              <b>Traditional institutions</b>
              <span>{lga.traditionalInstitutions}</span>

              <b>Peacebuilding</b>
              <span>{lga.peacebuilding}</span>
            </div>
          </article>

          <article className="card">
            <h3>Local sections</h3>
            <p>
              Towns and communities, development records, education and youth
              economy, agriculture and markets, land and community issues, and
              public notices will appear here after editorial review.
            </p>

            <Link className="card-link" href={`/submit?lga=${lga.slug}`}>
              Submit a record for this LGA →
            </Link>
          </article>
        </div>

        <div className="section">
          <SectionHeader title="Recent records" />

          <div className="grid two">
            {localRecords.length ? (
              localRecords.map((record) => (
                <article className="card" key={record.slug}>
                  <h3>{record.title}</h3>
                  <p>{record.summary}</p>
                </article>
              ))
            ) : (
              <EmptyState
                title="No verified records yet"
                text="Public records will be added after editorial review."
              />
            )}
          </div>
        </div>

        <SensitivityNotice />
      </div>
    </main>
  );
}
