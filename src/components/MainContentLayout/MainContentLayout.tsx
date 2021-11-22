import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

import Header from './Header/Header';
import SectionTitle from './SectionTitle/SectionTitle';
import Sidebar from './Sidebar/Sidebar';

const MainContainer = styled.main`
  display: flex;
  margin: 0 40px;
`;

const SectionContainer = styled.section`
  padding: 0 10px;
`;

const ContentLayout = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Sidebar />
        <SectionContainer>
          <SectionTitle />
          <Outlet />
        </SectionContainer>
      </MainContainer>
    </>
  );
};

export default ContentLayout;
