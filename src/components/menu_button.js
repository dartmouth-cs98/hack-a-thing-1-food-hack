// menu_button.js
import React from 'react';
import { Link } from 'react-router';

const MenuButton = (props) => {
  const url = '/'; // later we can pass in the real route as a prop
  return (
    <Link to={url} className="menu-btn" >
      <div className="menu-item"> {props.text} </div>
    </Link>
  );
};

export default MenuButton;
