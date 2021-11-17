import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

const GameListContainer = styled.div``;

const GameList = () => {
  return (
    <GameListContainer>
      <Link to="me">ME</Link>
      <Link to="/6">ID 6</Link>
    </GameListContainer>
  );
};

export default GameList;
