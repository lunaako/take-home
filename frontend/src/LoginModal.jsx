import React, { useState, useEffect } from 'react';
import './Modal.css';

export default function LoginModal({ open, onClose, autofillEmail, autofillPassword, onLogin }) {
  const [email, setEmail] = useState(autofillEmail || '');
  const [password, setPassword] = useState(autofillPassword || '');

  useEffect(() => {
    setEmail(autofillEmail || '');
    setPassword(autofillPassword || '');
  }, [autofillEmail, autofillPassword, open]);

  if (!open) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 style={{color:'#111'}}>Login</h2>
        <form onSubmit={e => { e.preventDefault(); onLogin(email, password); }}>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
} 