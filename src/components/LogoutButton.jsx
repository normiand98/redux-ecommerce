// LogoutButton.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../features/userSlice'; // Assuming you have a logout action
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutUser = () => {
    dispatch(logoutUser());
    navigate('/login'); // Redirect to login page

  };

  return (
    <button 
      onClick={handleLogoutUser} 
      className={className}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
