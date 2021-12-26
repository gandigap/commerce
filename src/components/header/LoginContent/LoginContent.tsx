import React from 'react';
import { Link } from 'react-router-dom';

import { _authPageTypes } from 'constants/constants';

const LoginContent = () => {
  return (
    <>
      <Link to="login">{_authPageTypes.log}</Link>
      <Link to="register">{_authPageTypes.reg}</Link>
    </>
  );
};

export default LoginContent;
