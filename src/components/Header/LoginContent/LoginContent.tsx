import { _authPageTypes } from 'constants/constants';
import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { headerAndFormLink, headerAndFormLinkHover } from 'styles/mixins';

const AuthContainer = styled.div`
  display: flex;
  align-items: center;

  & a {
    margin: 0 10px;
    ${headerAndFormLink}

    &:hover {
      ${headerAndFormLinkHover}

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
      <Link to="login">{_authPageTypes.log}</Link>
      <Link to="register">{_authPageTypes.reg}</Link>
    </AuthContainer>
  );
};

export default LoginContent;
