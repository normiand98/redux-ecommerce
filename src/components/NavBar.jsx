import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logoutUser } from '../features/userSlice'; 

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.users.currentUser);

  const handleLogoutUser = () => {
    dispatch(logoutUser());
    navigate('/login');   // Redirect to home page after logout
  };

  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '10px 20px',
      color: '#fff',
      position: 'fixed',  // Keep it fixed at the top
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,  // Ensure it stays above other elements
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    }}>
      <div>
        {currentUser && currentUser.role === 'shopper' && (
          <Link to="/cart" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Cart</Link>
        )}
        <Link to="/dashboard" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</Link>
      </div>
      
      <div>
        {currentUser ? (
          <button 
            onClick={handleLogoutUser} 
            style={{ 
              backgroundColor: '#f44336', 
              color: '#fff', 
              border: 'none', 
              padding: '5px 10px', 
              cursor: 'pointer' 
            }}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Login</Link>
            <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
