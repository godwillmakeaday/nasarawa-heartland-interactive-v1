export type Lga = { slug: string; name: string; profile: string; towns: string; developmentWatch: string; publicRecords: string; traditionalInstitutions: string; peacebuilding: string; sourceStatus: string };
export type IssueDesk = { slug: string; title: string; explanation: string; why: string; sensitivity: "Low" | "Moderate" | "High"; caution: boolean };
export type RecordItem = { slug: string; title: string; recordType: string; lga: string; issue: string; date: string; verificationStatus: string; sensitivity: string; editorialStatus: string; sourceNote: string; summary: string; context: string; relatedLgas: string[]; relatedIssues: string[] };

const lgaNames = ["Lafia", "Keffi", "Akwanga", "Nasarawa Eggon", "Wamba", "Kokona", "Karu", "Nasarawa", "Toto", "Doma", "Awe", "Keana", "Obi"];
const slugify = (s: string) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const lgas: Lga[] = lgaNames.map((name) => ({
  slug: slugify(name),
  name,
  profile: "Awaiting verified civic profile. This page is prepared for public records, development notes, civic institutions, and source-backed community updates.",
  towns: "Major towns and corridors will be listed only after local verification.",
  developmentWatch: "Roads, education, markets, agriculture, health, water, youth enterprise, and public services placeholder.",
  publicRecords: "0 published records in this prototype.",
  traditionalInstitutions: "Traditional institution records require source notes before publication.",
  peacebuilding: "Peacebuilding notes will be handled with care, verification, and non-inflammatory language.",
  sourceStatus: "Source-note framework ready; verified local records pending."
}));

export const issues: IssueDesk[] = [
  ["Governance", "Records of public offices, official notices, appointments, budget questions, and institutional accountability."],
  ["Public Records", "A registry of notices, statements, institutional updates, clarifications, and civic documents."],
  ["Land and Communities", "Careful records on land, boundaries, settlement, farming, grazing, and community development."],
  ["Agriculture", "Farm systems, rural economy, food corridors, market access, and community production records."],
  ["Education", "Schools, skills, institutions, youth learning, and public education development notes."],
  ["Youth Economy", "Employment, enterprise, digital work, apprenticeships, creative economy, and opportunity tracking."],
  ["Women and Community Economy", "Women-led enterprise, cooperative records, market participation, care economy, and community resilience."],
  ["Traditional Institutions", "Title updates, public notices, cultural ceremonies, and institutional statements requiring careful source notes."],
  ["Faith and Peacebuilding", "Faith communities, coexistence work, peacebuilding records, and public-interest inter-community notes."],
  ["Security and Justice", "Security, justice, courts, public safety, and rights-related records requiring high restraint."],
  ["Health and Community Care", "Health facilities, community care, service gaps, and institutional health updates."],
  ["Markets and Enterprise", "Markets, trade corridors, SME activity, enterprise records, and local commerce notes."],
  ["Abuja-Nasarawa Corridor", "Urban pressure, housing, transport, Karu-Keffi-Lafia links, and Abuja proximity questions."],
  ["Minerals and Environmental Responsibility", "Mineral promise, environmental responsibility, host communities, and public-interest documentation."]
].map(([title, explanation]) => {
  const sensitive = /Land|Traditional|Faith|Security/.test(title);
  return { slug: slugify(title), title, explanation, why: "This issue matters because civic memory must connect public claims to source notes, local context, and development consequences.", sensitivity: sensitive ? "High" : "Moderate", caution: sensitive } as IssueDesk;
});

export const records: RecordItem[] = [
  {
    slug: "placeholder-lga-development-note",
    title: "LGA development note awaiting verification",
    recordType: "Community Development Project",
    lga: "Lafia corridor",
    issue: "Governance",
    date: "Prototype date pending",
    verificationStatus: "Unverified placeholder",
    sensitivity: "Moderate",
    editorialStatus: "Draft",
    sourceNote: "No public source attached yet. This sample demonstrates the registry structure only.",
    summary: "A sample record showing how a local government development update would appear after editorial review.",
    context: "The live platform should include only source-backed public records, notices, or verified community updates.",
    relatedLgas: ["Lafia"],
    relatedIssues: ["Governance", "Public Records"]
  },
  {
    slug: "traditional-institution-update-placeholder",
    title: "Traditional institution update placeholder",
    recordType: "Traditional Institution Update",
    lga: "Akwanga axis",
    issue: "Traditional Institutions",
    date: "Prototype date pending",
    verificationStatus: "Source required",
    sensitivity: "High",
    editorialStatus: "Needs Source",
    sourceNote: "Traditional institution records must be tied to public notices, institution statements, or reliable source documentation.",
    summary: "A careful placeholder for future traditional institution records without inventing names, titles, or claims.",
    context: "This category requires special restraint because title claims and community identity matters can affect reputations and peace.",
    relatedLgas: ["Akwanga"],
    relatedIssues: ["Traditional Institutions", "Culture and Identity"]
  },
  {
    slug: "land-community-caution-placeholder",
    title: "Land and community issue caution record",
    recordType: "Land/Community Issue",
    lga: "Statewide",
    issue: "Land and Communities",
    date: "Prototype date pending",
    verificationStatus: "Legal/Risk review required",
    sensitivity: "High",
    editorialStatus: "Sensitivity Review",
    sourceNote: "Land, boundary, settlement, farming, grazing, and identity claims require careful verification and right-of-reply consideration.",
    summary: "A sample record demonstrating how sensitive land/community issues should be flagged before publication.",
    context: "The platform should not publish incitement, collective blame, unsupported allegations, or private accusations.",
    relatedLgas: ["Statewide"],
    relatedIssues: ["Land and Communities", "Peacebuilding"]
  }
];

export const editorialPrinciples = [
  "Non-partisan documentation",
  "Verification before publication",
  "No ethnic abuse or incitement",
  "No publication of private phone numbers or personal data",
  "Careful handling of land and identity claims",
  "Right of reply for serious allegations",
  "Source notes for public claims",
  "Correction and update policy",
  "Public-interest restraint"
];
