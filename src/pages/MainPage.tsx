import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/header/Header';
import Sidebar from 'components/navigation/Navigation';

import styled from 'styled-components';

const MainContainer = styled.main`
  display: flex;
  margin: 0 40px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const SectionContainer = styled.section`
  flex-grow: 1;
`;

const MainPage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Sidebar />
        <SectionContainer>
          <Outlet />
        </SectionContainer>
      </MainContainer>
    </>
  );
};

export default MainPage;
