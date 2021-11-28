import { useAppSelector } from 'hooks/redux-hooks';
import React from 'react';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

import Header from '../Header/Header';

const GameContainer = styled.div``;

const GameLayout = () => {
  const { currentGameId, downloadGames } = useAppSelector((state) => state.gameReducer);

  console.log(downloadGames[currentGameId], 'download');
  return (
    <>
      <Header />
      <GameContainer>
        {`Game ${downloadGames[currentGameId] && downloadGames[currentGameId].name}`}{' '}
      </GameContainer>
    </>
  );
};
/*  */
export default GameLayout;
