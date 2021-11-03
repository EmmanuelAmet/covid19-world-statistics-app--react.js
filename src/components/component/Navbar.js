import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return <nav className="nav-link">
    <div className="container-fluid">
      <ul>
      <li className="nav-links">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-links">
        <Link to="/about">About</Link>
      </li>
    </ul>
    </div>
    
  </nav>;
};

export default Navbar;
