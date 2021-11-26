import { useAppSelector } from 'hooks/redux';
import React from 'react';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

import Header from '../Header/Header';

const GameContainer = styled.div``;

const GameLayout = () => {
  const { currentGameId } = useAppSelector((state) => state.gameReducer);
  const mapTest = new Map();
  mapTest.set('a', 4);
  mapTest.set(3, true);
  console.log(mapTest);
  mapTest.delete(3);
  console.log(mapTest);
  return (
    <>
      <Header />
      <GameContainer>{`Game ${currentGameId}`} </GameContainer>
    </>
  );
};

export default GameLayout;
