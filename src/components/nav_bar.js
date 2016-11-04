// nav_bar.js
import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.welcomeText = 'Welcome Im the Nav Bar';
  }

  render() {
    const aboutClassName = (this.props.path === '/about') ? 'menu-btn selected-menu-btn' : 'menu-btn';
    const contactClassName = (this.props.path === '/contact') ? 'menu-btn selected-menu-btn' : 'menu-btn';
    const activityClassName = (this.props.path === '/' || this.props.gradeSelected) ? 'menu-btn selected-menu-btn' : 'menu-btn';
    return (
      <div className="nav-container">
        <div className="menu-container">
          <Link to="/" className={activityClassName} >ACTIVITIES</Link>
          <Link to="/about" className={aboutClassName} >ABOUT</Link>
          <Link to="/contact" className={contactClassName} >CONTACT</Link>
        </div>
        <Link to="/login" className="login-btn" >
          <img className="login-img" src="/assets/LOGIN_button.png" alt="Error" />
        </Link>
      </div>
    );
  }
}

export default NavBar;
