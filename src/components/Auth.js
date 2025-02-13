import React, { useState } from 'react';
// Authentication component to select a user role and proceed to login
function Auth({ onLogin }) {
  const [role, setRole] = useState('');
  // Function to handle login when a role is selected
  const handleLogin = () => {
    if (role) {
      onLogin(role);
    }
  };

  return (
    <div style={{backgroundColor: '#2c2c2c', color: '#fff', textAlign: 'center', padding: '50px', height:'100vh' }}>
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
