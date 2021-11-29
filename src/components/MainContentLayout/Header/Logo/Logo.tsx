import React from 'react';
import { ReactComponent as ReactLogo } from 'images/commerce_logo.svg';

import styled from 'styled-components';
import 'react-awesome-slider/src/styles';

import { Link } from 'react-router-dom';

const LogoContainer = styled.div`
  margin: 0 10px;
  width: 40px;
  height: 40px;
  border-radius: 100%;

  &:hover {
    background-color: var(--color-4);
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <ReactLogo style={{ fill: 'var(--color-5)' }} />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
