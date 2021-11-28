import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

const LoginContainer = styled.div``;

const LoginContent = () => {
  return (
    <LoginContainer>
      <Link to="login">Login</Link>
      <Link to="register">Sign up</Link>
    </LoginContainer>
  );
};

export default LoginContent;
