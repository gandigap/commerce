import React from 'react';
import { ReactComponent as ReactLogo } from 'images/commerce_logo.svg';

import styled from 'styled-components';
import 'react-awesome-slider/src/styles';

import { Link } from 'react-router-dom';

const LogoContainer = styled.div`
  display: flex;
  margin: 0 20px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: var(--color-2);

  &:hover {
    background-color: var(--color-3);
  }
`;

const styleLink = {
  margin: '5px',
};

const Logo = () => {
  return (
    <LogoContainer>
      <Link style={styleLink} to="/">
        <ReactLogo style={{ fill: 'var(--color-5)', width: '40px', height: '40px' }} />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
