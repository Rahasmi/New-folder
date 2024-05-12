// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './Login';
import SignupModal from './Signup';
import TopicsDropdown from './TopicsDropdown';

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const toggleLoginModal = () => setShowLoginModal(!showLoginModal);
  const toggleSignupModal = () => setShowSignupModal(!showSignupModal);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* Navbar content */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">CodeXpanse</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about.html">About</Link>
            </li>
            <TopicsDropdown />
            <li className="nav-item">
              <Link className="nav-link" to="/contact.html">Contact Us</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <button className="btn btn-outline-light mx-2"  onClick={toggleLoginModal}>Login</button>
          <button className="btn btn-outline-light" onClick={toggleSignupModal}>Sign Up</button>
        </div>
      </div>
      {/* Login and Signup Modals */}
      <LoginModal show={showLoginModal} onHide={toggleLoginModal} />
      <SignupModal show={showSignupModal} onHide={toggleSignupModal} />
    </nav>
  );
};

export default Navbar;


