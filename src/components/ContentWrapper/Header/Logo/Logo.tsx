import React from 'react';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

/* import SearchLogo from 'images/search.svg'; */

const LogoContainer = styled.figure`
  width: 40px;
  height: 40px;
`;

const Logo = () => {
  return <LogoContainer>{/* <img src={SearchLogo} alt="Logo" /> */}</LogoContainer>;
};

export default Logo;
