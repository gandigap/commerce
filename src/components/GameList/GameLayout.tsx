import React from 'react';
import { useAppSelector } from 'hooks/redux-hooks';

import Header from 'components/Header/Header';

import styled from 'styled-components';

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
