import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

const AuthContainer = styled.div`
  display: flex;
  align-items: center;

  & a {
    position: relative;
    color: var(--color-5);
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      color: var(--color-4);

      &:after {
        position: absolute;
        content: '';
        height: 2px;
        bottom: -4px;
        margin: 0 auto;
        left: 0;
        right: 0;
        width: 100%;
        background-color: var(--color-5);
      }
    }
  }
`;

const LoginContent = () => {
  return (
    <AuthContainer>
      <Link to="login">Login</Link>
      <Link to="register">Sign up</Link>
    </AuthContainer>
  );
};

export default LoginContent;
