import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    // For example, clear session storage or remove tokens
    sessionStorage.clear();

    // Redirect or navigate to the desired route after logout
    navigate('/'); // Example: Redirect to the login page
  };

  return (
    <button
      onClick={handleLogout}
      className="focus:outline-none text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md shadow-md"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
