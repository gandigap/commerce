import React from 'react';
import { Link } from 'react-router-dom';
import Login from './MainContentLayout/Form/Login';

const LoginPage = () => {
  return (
    <div>
      <h2>Login page</h2>
      or <Link to="/register">Register</Link>
      <Login />
    </div>
  );
};

export default LoginPage;
