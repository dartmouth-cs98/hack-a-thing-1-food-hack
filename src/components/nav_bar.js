// nav_bar.js
import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.welcomeText = 'Welcome Im the Nav Bar';
  }

  render() {
    const aboutClassName = (this.props.path === '/about') ? 'nav-btn selected-nav-btn' : 'nav-btn';
    const contactClassName = (this.props.path === '/contact') ? 'nav-btn selected-nav-btn' : 'nav-btn';
    const loginClassName = (this.props.path === '/login') ? 'login-btn selected-login-btn' : 'login-btn';
    const activityClassName = (this.props.path === '/' || this.props.gradeSelected) ? 'nav-btn selected-nav-btn' : 'nav-btn';
    return (
      <div className="nav-container">
        <div className="nav-menu-container">
          <Link to="/" className={activityClassName} >ACTIVITIES</Link>
          <Link to="/about" className={aboutClassName} >ABOUT</Link>
          <Link to="/contact" className={contactClassName} >CONTACT</Link>
        </div>
        <Link to="/login" className={loginClassName} >
          <img className="login-img" src="/assets/LOGIN_button.png" alt="Error" />
        </Link>
      </div>
    );
  }
}

export default NavBar;
