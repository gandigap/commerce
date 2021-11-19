import React from 'react';
import { getGames } from 'store/functions';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

const GameListContainer = styled.div``;

const GameList = () => {
  return (
    <GameListContainer>
      <button onClick={getGames}>Get data</button>
    </GameListContainer>
  );
};

export default GameList;
