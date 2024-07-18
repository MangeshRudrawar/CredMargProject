import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

const NavigationMenu = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/employee">Employees</Link>
      <Link to="/vendor">Vendors</Link>
      <Link to="/admin">Admin</Link>
      {/* <Link to="/send-email">Send Email</Link> */}
    </nav>
  );
};

export default NavigationMenu;