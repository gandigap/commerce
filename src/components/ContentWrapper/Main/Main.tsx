import React from 'react';

import Sidebar from './MainSection/Navigation/Sidebar';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

const MainContainer = styled.main`
  display: flex;
`;

const Main = () => {
  return (
    <MainContainer>
      <Sidebar />
    </MainContainer>
  );
};

export default Main;
