// login.js
import React from 'react';
import { Link } from 'react-router';

const Login = (props) => {
  const url = '/';
  return (
    <Link to={url} className="login-btn" >
      <img className="login-img" src={props.image} alt="Error" />
    </Link>
  );
};

export default Login;
