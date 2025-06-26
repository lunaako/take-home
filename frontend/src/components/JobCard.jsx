import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faBriefcase, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import Tooltip from './Tooltip';
import './JobCard.css';

function truncateWords(text, maxWords) {
  if (!text) return '';
  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '...';
}

export default function JobCard({ jobData, currentUser, onProtectedAction }) {
  const {
    companyLogo,
    companyName,
    companyDescription,
    title,
    salary_min,
    salary_max,
    location,
    job_type,
    description,
    timeAgo,
    founder,
    sponsorship_available,
    experience_level_required
  } = jobData;

  const notLoggedIn = !currentUser;
  const handleButtonClick = (e) => {
    if (notLoggedIn && onProtectedAction) {
      onProtectedAction(e);
    }
  };

  return (
    <div className="job-card">
      <div className="job-card-left">
        <div className="company-logo-col">
          <div className="company-logo-img">
            <img src={companyLogo} alt={companyName} className="company-logo" />
          </div>
          <div className="company-name-label">{companyName}</div>
        </div>
        <div className="job-info">
          <div className="job-meta">
            <span className="job-time time-bg black-text">{timeAgo}</span>
            <span className="job-level level-bg black-text">{experience_level_required}</span>
          </div>
          <h2 className="job-title">{title}</h2>
          <div className="company-short-desc">{companyDescription}</div>
          <div className="job-details">
            <span className="job-detail-item"><FontAwesomeIcon icon={faLocationDot} className="job-icon" /> {location}</span>
            <span>·</span>
            <span className="job-detail-item"><FontAwesomeIcon icon={faBriefcase} className="job-icon" /> {job_type}</span>
            <span>·</span>
            <span className="job-detail-item"><FontAwesomeIcon icon={faMoneyBillWave} className="job-icon" /> ${salary_min / 1000}K/yr - ${salary_max / 1000}K/yr</span>
          </div>
          <div className="job-desc">{truncateWords(description, 100)}</div>
        </div>
      </div>
      <div className="job-card-right horizontal-right">
        <div className="match-box-btn-col">
          {notLoggedIn && <Tooltip />}
          <div className={notLoggedIn ? 'match-box blurred-box' : 'match-box'}>
            <div className="match-label">STRONG MATCH</div>
            <div className="match-desc">{sponsorship_available ? '✔ H1B Sponsor Likely' : 'H1B Sponsor Unlikely'}</div>
          </div>
          <button className="apply-btn" onClick={handleButtonClick}>APPLY NOW</button>
        </div>
        <div className="founder-box-btn-col">
          <div className={notLoggedIn ? 'founder-box blurred-box' : 'founder-box'}>
            <img src={founder?.profile_picture_url} alt={founder?.first_name} className="founder-pic" />
            <div className="founder-info">
              <div className="founder-name">{founder?.first_name} {founder?.last_name}</div>
              <div className="founder-bio">{founder?.bio}</div>
            </div>
          </div>
          <button className="chat-btn" onClick={handleButtonClick}>LET'S CHAT</button>
        </div>
      </div>
    </div>
  );
} 