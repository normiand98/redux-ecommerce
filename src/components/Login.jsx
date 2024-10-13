import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('shopper');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const users = useSelector((state) => state.users.users);

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundUser = users.find(user => user.username === username && user.password === password);
    
    if (foundUser) {
      if (foundUser.role === role) {
        dispatch(loginUser({ username, password, role }));
        navigate('/dashboard');
      } else {
        setError('Invalid role selected. Please select the correct role.');
      }
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <form onSubmit={handleSubmit} style={{ padding: '20px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px' }}>Login</h2>
        
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          >
            <option value="shopper">Shopper</option>
            <option value="seller">Seller</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        
        <button
          type="submit"
          style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px' }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
