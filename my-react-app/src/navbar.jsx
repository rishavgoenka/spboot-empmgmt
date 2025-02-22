import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/getEmp">View Employees</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/createEmp">Create</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;