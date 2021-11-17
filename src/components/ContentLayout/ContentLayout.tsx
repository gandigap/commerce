import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

import Header from './Header/Header';
import Sidebar from './Main/MainSection/Sidebar/Sidebar';

const MainContainer = styled.main`
  display: flex;
`;

const ContentLayout = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Sidebar />
        <Outlet />
      </MainContainer>
    </>
  );
};

export default ContentLayout;
