import React from 'react';
import { Link, Route, Routes } from "react-router-dom";

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';
import Game from './Game';
import Other from './Other';

const GameListContainer = styled.div``;

const GameList = () => {
  let number = 6;
  return (
    <GameListContainer>
      <Link to="me">ME</Link>
      <Link to={`${number}`}>ID 6</Link>
    </GameListContainer>
  );
};

export default GameList;
