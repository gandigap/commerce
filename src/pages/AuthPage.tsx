import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import AuthForm from 'components/form/AuthForm';
import Logo from 'components/header/Logo/Logo';

import styled from 'styled-components';
import { headerAndFormLink, headerAndFormLinkHover, pseudoSeparator } from 'styles/mixins';

import { _authPageLinks, _authPageTypes } from 'constants/constants';
import { useAppDispatch } from 'hooks/redux-hooks';
import { userSlice } from 'store/reducers/UserSlice';

const AuthContainer = styled.div`
  height: 100%;
  margin: 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & a {
    ${headerAndFormLink}

    &:hover {
      ${headerAndFormLinkHover}
    }
  }
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
  const dispatch = useAppDispatch();
  const { userFetchingError } = userSlice.actions;

  const clearError = useCallback(() => {
    dispatch(userFetchingError(''));
  }, [dispatch, userFetchingError]);

  return (
    <AuthContainer>
      <AuthHeader>
        <Logo />
        <AuthTitle>{type}</AuthTitle>
      </AuthHeader>
      <AuthForm typeForm={type} />
      <Separator>or</Separator>
      {type === _authPageTypes.log ? (
        <Link to="/register" onClick={clearError}>
          {_authPageLinks.create}
        </Link>
      ) : (
        <Link to="/login" onClick={clearError}>
          {_authPageLinks.login}
        </Link>
      )}
    </AuthContainer>
  );
};

export default AuthPage;
