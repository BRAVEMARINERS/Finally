import { PageHeader } from "../../components/PageHeader";
import { jobs } from "../../lib/mock";
import { JobCard } from "../../components/JobCard";
export default function JobsPage() {
  return <main className="container page-wrap"><PageHeader title="Jobs" subtitle="Discover maritime roles matched to rank, vessel type, and availability." /><div className="grid">{jobs.map((job) => <JobCard key={job.id} title={job.title} company={job.company} vesselType={job.vesselType} location={job.location} salary={job.salary} match={job.match} href={`/jobs/${job.id}`} />)}</div></main>;
}
