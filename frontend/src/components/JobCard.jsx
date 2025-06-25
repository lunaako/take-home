import React from 'react';
import './JobCard.css';

export default function JobCard({ jobData }) {
  const {
    companyLogo,
    companyName,
    title,
    tagNames,
    salary_min,
    salary_max,
    location,
    job_type,
    description_short,
    timeAgo,
    founder,
    sponsorship_available
  } = jobData;

  return (
    <div className="job-card">
      {/* Left section */}
      <div className="job-card-left">
        <img src={companyLogo} alt={companyName} className="company-logo" />
        <div className="job-info">
          <div className="job-meta">
            <span className="job-time">{timeAgo}</span>
            <span className="job-level">New Grad, Entry Level</span>
          </div>
          <h2 className="job-title">{title}</h2>
          <div className="job-tags">
            {tagNames.map(tag => <span key={tag} className="job-tag">{tag}</span>)}
          </div>
          <div className="job-details">
            <span>{location}</span>
            <span>·</span>
            <span>{job_type}</span>
            <span>·</span>
            <span>${salary_min / 1000}K/yr - ${salary_max / 1000}K/yr</span>
          </div>
          <div className="job-desc">{description_short}</div>
        </div>
      </div>
      {/* Right section */}
      <div className="job-card-right">
        <div className="match-box">
          <div className="match-label">STRONG MATCH</div>
          <div className="match-desc">{sponsorship_available ? '✔ H1B Sponsor Likely' : 'H1B Sponsor Unlikely'}</div>
          <button className="apply-btn">APPLY NOW</button>
        </div>
        <div className="founder-box">
          <img src={founder?.profile_picture_url} alt={founder?.first_name} className="founder-pic" />
          <div className="founder-info">
            <div className="founder-name">{founder?.first_name} {founder?.last_name}</div>
            <div className="founder-bio">{founder?.bio}</div>
          </div>
          <button className="chat-btn">LET'S CHAT</button>
        </div>
      </div>
    </div>
  );
} 