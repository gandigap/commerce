import React, { useEffect } from 'react';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { gameSlice } from 'store/reducers/GameSlice';
import { fetchGames } from 'store/reducers/ActionCreators';

const GameListContainer = styled.div``;

const GameList = () => {
  const { games, count } = useAppSelector((state) => state.gameReducer);
  const { increment } = gameSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('yes');
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <GameListContainer>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(5))}>Click count</button>
      {games.map((game) => (
        <p key={game.id}>{game.name}</p>
      ))}
    </GameListContainer>
  );
};

export default GameList;
