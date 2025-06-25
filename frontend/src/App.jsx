import './App.css';
import JobCard from './components/JobCard';
import {
  users,
  companies,
  jobs,
  tags,
  job_tags,
  company_members
} from './pseudo-data';

function getDisplayJobs() {
  return jobs.map(job => {
    const company = companies.find(c => c.id === job.company_id);
    const jobTagIds = job_tags.filter(jt => jt.job_id === job.id).map(jt => jt.tag_id);
    const jobTagNames = tags.filter(tag => jobTagIds.includes(tag.id)).map(tag => tag.name);
    const founderMember = company_members.find(cm => cm.company_id === job.company_id && cm.role_in_company === 'founder');
    const founder = founderMember ? users.find(u => u.id === founderMember.user_id) : null;
    const createdAt = new Date(job.created_at);
    const now = new Date();
    const diffMs = now - createdAt;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const timeAgo = diffHours < 1 ? 'just now' : `${diffHours} hours ago`;

    return {
      ...job,
      companyName: company?.name,
      companyLogo: company?.logo_url,
      tagNames: jobTagNames,
      founder,
      timeAgo,
    };
  });
}

function App() {
  const displayJobs = getDisplayJobs();

  return (
    <div className="app-container">
      <h1 className="main-title">Our Popular Jobs</h1>
      <p className="subtitle">Be one of the first 10 to apply</p>
      <div className="job-list">
        {displayJobs.map(job => (
          <JobCard key={job.id} jobData={job} />
        ))}
      </div>
    </div>
  );
}

export default App;
