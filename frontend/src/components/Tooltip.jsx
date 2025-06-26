import React from 'react';
import './Tooltip.css';

export default function Tooltip() {
  return (
    <div className="tooltip-wrapper">
      <div className="tooltip-content">

        <div className="tooltip-text">
          <div className="tooltip-title">
            <div className="tooltip-icon">
              <img src="/duck-icon.png" alt="Duck Icon" />
            </div>
            Tips:</div>
          <div className="tooltip-message">Register with US to unlock more features!</div>
        </div>
      </div>
      <div className="tooltip-arrow"></div>
    </div>
  );
} 