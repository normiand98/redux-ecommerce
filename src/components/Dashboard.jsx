import React from 'react';
import { useSelector } from 'react-redux';
import SellerPage from './SellerPage'; // Import the pages for each role
import AdminPage from './AdminPage';
import ShopperPage from './ShopperPage';

const Dashboard = () => {
  const currentUser = useSelector((state) => state.users.currentUser); // Get current user from state

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?business,login')" }}></div>
        <div className="relative z-10 text-gray-900 text-center p-6 rounded-lg shadow-lg bg-white bg-opacity-90">
          <a 
            href="/login"
            style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none'}}
          >
            Log In
          </a>
        </div>
      </div>
    );
  }

  // Role-based rendering
  if (currentUser.role === 'admin') {
    return <AdminPage />;
  }

  if (currentUser.role === 'seller') {
    return <SellerPage />;
  }

  if (currentUser.role === 'shopper') {
    return <ShopperPage />;
  }

  return <div>Invalid role, please try again.</div>;
};

export default Dashboard;
