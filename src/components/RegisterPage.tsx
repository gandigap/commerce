import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from './MainContentLayout/Header/LoginContent/SignUp';

const RegisterPage = () => {
  return (
    <div>
      <h2>Register page</h2>
      or <Link to="/login">Login</Link>
      <SignUp />
    </div>
  );
};

export default RegisterPage;
