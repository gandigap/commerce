import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';

import styled from 'styled-components';
import { gameSlice } from 'store/reducers/GameSlice';
import { fetchGame } from 'store/reducers/ActionCreators';

const GameContainer = styled.div`
  margin: 0 40px;
`;

const GameTitle = styled.div`
  font-size: 24px;
`;

const GameDescription = styled.div`
  font-size: 18px;
`;

const Game = () => {
  const { currentGameId, downloadGames } = useAppSelector((state) => state.gameReducer);
  const { setCurrentGameId } = gameSlice.actions;
  const dispatch = useAppDispatch();

  /* useEffect(() => {
    dispatch(setCurrentGameId(5));
    dispatch(fetchGame(5));
  }, [dispatch, fetchGame, setCurrentGameId]); */

  return (
    <GameContainer>
      <GameTitle>{downloadGames[currentGameId] && downloadGames[currentGameId].name}</GameTitle>
      <GameDescription>
        {downloadGames[currentGameId] && downloadGames[currentGameId].description_raw}
      </GameDescription>
      {`Game ${downloadGames[currentGameId] && downloadGames[currentGameId].name}`}{' '}
    </GameContainer>
  );
};
export default Game;
