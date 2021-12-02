import React from 'react';

import styled from 'styled-components';

import Aside from './NavList';

const NavigationContainer = styled.nav`
  min-width: 200px;
  height: 250px;
`;

const Navigation = () => {
  return (
    <NavigationContainer>
      <Aside />
    </NavigationContainer>
  );
};

export default Navigation;
