import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserRole, deleteUser, addUser } from '../features/userSlice';

const AdminPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newRole, setNewRole] = useState('shopper'); // Default role

  const handleAddUser = () => {
    if (newUsername && newPassword) {
      const newUser = {
        id: Date.now(),
        username: newUsername,
        password: newPassword,
        role: newRole,
      };
      dispatch(addUser(newUser));

      // Clear the form fields
      setNewUsername('');
      setNewPassword('');
      setNewRole('shopper');
    }
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  const handleRoleChange = (id, newRole) => {
    dispatch(updateUserRole({ id, role: newRole }));
  };

  return (
    <div className="admin-page" style={{ padding: '10px', maxWidth: '600px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Admin Dashboard</h2>

      <h3>Manage Users</h3>
      <ul style={{ padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span>{user.username} ({user.role})</span>
            <div>
              <button 
                onClick={() => handleDeleteUser(user.id)} 
                style={{ 
                  backgroundColor: '#f44336', 
                  color: '#fff', 
                  border: 'none', 
                  padding: '5px 10px', 
                  cursor: 'pointer' 
                }}
              >
                Delete
              </button>
              <select
                value={user.role}
                onChange={(e) => handleRoleChange(user.id, e.target.value)}
              >
                <option value="shopper">Shopper</option>
                <option value="seller">Seller</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </li>
        ))}
      </ul>

      <h3>Create New User</h3>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          style={{ marginBottom: '5px', padding: '5px', border: '1px solid black' }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={{ marginBottom: '5px', padding: '5px', border: '1px solid black' }}
        />
        <br />
        <select
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          style={{ marginBottom: '5px', padding: '5px', border: '1px solid black' }}
        >
          <option value="shopper">Shopper</option>
          <option value="seller">Seller</option>
          <option value="admin">Admin</option>
        </select>
        <br />
        <button 
          onClick={handleAddUser}
          style={{ backgroundColor: '#007BFF', color: 'white', padding: '5px', border: '1px solid black' }}
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
