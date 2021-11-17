import React from 'react';
import { Outlet } from 'react-router-dom'

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

const GameContainer = styled.div``;

const Game = () => {
  return (
    <GameContainer>
      Game
      <Outlet />
    </GameContainer>
  );
};

export default Game;
