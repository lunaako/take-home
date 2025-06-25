import './App.css';
import JobCard from './components/JobCard';
import LoginModal from './LoginModal';
import React, { useState } from 'react';
import {
  users,
  companies,
  jobs,
  tags,
  job_tags,
  company_members,
  candidate_profiles
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
      companyDescription: company?.description,
      tagNames: jobTagNames,
      founder,
      timeAgo,
    };
  });
}

function App() {
  const displayJobs = getDisplayJobs();
  const [showLogin, setShowLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showRegisterTip, setShowRegisterTip] = useState(false);

  // Find the first candidate user for autofill
  const candidateUser = (() => {
    const candidate = candidate_profiles[0];
    return users.find(u => u.id === candidate.user_id);
  })();

  // Handle login logic
  const handleLogin = (email, password) => {
    // For demo, password is always 'password'
    const user = users.find(u => u.email === email);
    if (user && password === 'password') {
      setCurrentUser(user);
      setShowLogin(false);
    } else {
      alert('Invalid credentials');
    }
  };

  // Handler for protected actions
  const handleProtectedAction = (e) => {
    if (!currentUser) {
      e.preventDefault();
      setShowRegisterTip(true);
    }
  };

  // Handle logout
  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div className="app-container">
      <div className="topbar">
        <div></div>
        <div className="auth-buttons">
          {currentUser ? (
            <button className="auth-btn" onClick={handleLogout}>Log out</button>
          ) : (
            <button className="auth-btn" onClick={() => setShowLogin(true)}>Login</button>
          )}
        </div>
      </div>
      <h1 className="main-title">Our Popular Jobs</h1>
      <p className="subtitle">Be one of the first 10 to apply</p>
      <div className="job-list">
        {displayJobs.map(job => (
          <JobCard
            key={job.id}
            jobData={job}
            currentUser={currentUser}
            onProtectedAction={handleProtectedAction}
          />
        ))}
      </div>
      <LoginModal
        open={showLogin}
        onClose={() => setShowLogin(false)}
        autofillEmail={candidateUser?.email}
        autofillPassword={"password"}
        onLogin={handleLogin}
      />
      {showRegisterTip && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowRegisterTip(false)}>×</button>
            <h2 style={{color:'#ff9900'}}>Tips</h2>
            <div style={{marginBottom: '16px', color: '#111'}}>Register with us to unlock more features!</div>
            <button className="auth-btn" onClick={() => setShowRegisterTip(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
