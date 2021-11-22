import React, { useEffect } from 'react';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { fetchGames } from 'store/reducers/ActionCreators';
import { IGame } from 'models/IGame';
import GameCard from './GameCard.tsx/GameCard';

const GameListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const GameList = () => {
  const { games, isLoading, error } = useAppSelector((state) => state.gameReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    games.length === 0 && dispatch(fetchGames());
  }, [dispatch, games.length]);

  return (
    <GameListContainer>
      {isLoading && <h3>Идет загрузка</h3>}
      {error && <h3>{error}</h3>}
      {games.map((game: IGame) => (
        <GameCard key={game.id} gameData={game} />
      ))}
    </GameListContainer>
  );
};

export default GameList;
