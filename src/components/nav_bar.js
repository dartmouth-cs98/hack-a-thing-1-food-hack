// nav_bar.js
import React, { Component } from 'react';

import Login from './login';
import MenuButton from './menu_button';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.welcomeText = 'Welcome Im the Nav Bar';
  }

  render() {
    return (
      <div className="nav_container">
        <Login image="/assets/LOGIN_button.png" />
        <div className="menu_container">
          <MenuButton text="ACTIVITIES" />
          <MenuButton text="ABOUT" />
          <MenuButton text="CONTACT" />
        </div>
      </div>
    );
  }
}

export default NavBar;
