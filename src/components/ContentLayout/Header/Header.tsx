import React from 'react';

import Logo from './Logo/Logo';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import SearchInput from './SearchInput/SearchInput';
import LoginContent from './LoginContent/LoginContent';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

const HeaderContainer = styled.header`
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ThemeSwitcher />
      <Logo />
      <SearchInput />
      <LoginContent />
    </HeaderContainer>
  );
};

export default Header;
