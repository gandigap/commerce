import React from 'react';

import Logo from './Logo/Logo';
import SearchInput from './SearchInput/SearchInput';
import LoginContent from './LoginContent/LoginContent';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import { useAuth } from 'hooks/auth-hook';
import AuthContent from './LoginContent/AuthContent';

import styled from 'styled-components';
import { headerAndFormLink, headerAndFormLinkHover } from 'styles/mixins';

const HeaderContainer = styled.header`
  margin: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const AuthHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;

  @media (max-width: 768px) {
    order: -1;
    flex-grow: 0;
  }

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

const Header = () => {
  const { isAuth } = useAuth();
  return (
    <HeaderContainer>
      <ThemeSwitcher />
      <Logo />
      <SearchInput />
      <AuthHeaderContainer>{isAuth ? <AuthContent /> : <LoginContent />}</AuthHeaderContainer>
    </HeaderContainer>
  );
};

export default Header;
