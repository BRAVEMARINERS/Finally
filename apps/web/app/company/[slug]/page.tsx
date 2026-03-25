import { PageHeader } from "../../../components/PageHeader";
export default function CompanyPublicPage({ params }: { params: { slug: string } }) {
  return <main className="container page-wrap"><PageHeader title={`Company: ${params.slug}`} subtitle="Public company page placeholder." /><div className="card"><span className="badge success">Verified company</span></div></main>;
}
