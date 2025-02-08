import React, { useState } from 'react';

function Auth({ onLogin }) {
  const [role, setRole] = useState('');

  const handleLogin = () => {
    if (role) {
      onLogin(role);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Select Your Role</h2>
      <select value={role} onChange={(e) => setRole(e.target.value)} style={{ padding: '10px', marginBottom: '20px' }}>
        <option value="">Select Role</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <br />
      <button onClick={handleLogin} style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#444', color: '#fff', border: 'none', borderRadius: '5px' }}>
        Login
      </button>
    </div>
  );
}

export default Auth;