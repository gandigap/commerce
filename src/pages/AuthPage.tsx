import React from 'react';
import { Link } from 'react-router-dom';

import AuthForm from 'components/form/AuthForm';

import styled from 'styled-components';
import { pseudoSeparator } from 'styles/mixins';
import { _authPageLinks, _authPageTypes } from 'constants/constants';
import Logo from 'components/Header/Logo/Logo';

const AuthContainer = styled.div`
  height: 100%;
  margin: 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AuthHeader = styled.header`
  margin: 0 auto;
  text-align: center;
`;

const AuthTitle = styled.h2`
  font-size: 20px;
`;

const Separator = styled.p`
  margin: 10px;
  position: relative;

  &:after {
    ${pseudoSeparator}
    left: 20px;
  }

  &:before {
    ${pseudoSeparator}
    right: 20px;
  }
`;
interface IAuthPage {
  type: string;
}
const AuthPage: React.FC<IAuthPage> = ({ type }) => {
  return (
    <AuthContainer>
      <AuthHeader>
        <Logo />
        <AuthTitle>{type}</AuthTitle>
      </AuthHeader>
      <AuthForm typeForm={type} />
      <Separator>or</Separator>
      {type === _authPageTypes.login ? (
        <Link to="/register">{_authPageLinks.create}</Link>
      ) : (
        <Link to="/login">{_authPageLinks.login}</Link>
      )}
    </AuthContainer>
  );
};

export default AuthPage;
