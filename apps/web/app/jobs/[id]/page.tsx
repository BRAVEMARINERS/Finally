import { jobs } from "../../../lib/mock";
export default function JobDetailsPage({ params }: { params: { id: string } }) {
  const job = jobs.find((item) => item.id === params.id) || jobs[0];
  return <main className="container page-wrap"><div className="card"><span className="badge">{job.match} match</span><h1 className="page-title" style={{ marginTop: "16px" }}>{job.title}</h1><p className="page-subtitle">{job.company} · {job.vesselType} · {job.location}</p><div className="actions"><button className="button primary">Apply now</button><button className="button">Save job</button></div></div></main>;
}
