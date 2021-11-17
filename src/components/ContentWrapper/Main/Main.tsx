import React from 'react';
import {
  Link,
  Routes,
  Route
} from "react-router-dom";

import Sidebar from './MainSection/Navigation/Sidebar';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';
import GameList from './MainSection/GameList/GameList';
import Game from './MainSection/GameList/Game';
import Other from './MainSection/GameList/Other';

const MainContainer = styled.main`
  display: flex;
`;

const Main = () => {
  return (
    <MainContainer>
      <Sidebar />
      <Routes>
        <Route path="/" element={<p>Start content</p>} />
        <Route path="/gamelist" element={<GameList />} />
        <Route path="/gamelist/:id" element={<Game />} />
        <Route path="/gamelist/me" element={<Other />} />
        <Route path="/stores" element={<p>Stores content</p>} />

      </Routes>
    </MainContainer>
  );
};

export default Main;
