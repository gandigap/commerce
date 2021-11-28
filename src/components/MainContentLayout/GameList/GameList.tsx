import React, { useEffect } from 'react';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { fetchGames } from 'store/reducers/ActionCreators';
import { IGame } from 'models/gameInterfaces';
import GameCard from './GameCard.tsx/GameCard';

const GameListContainer = styled.div`
  display: grid;
  grid-gap: 0 24px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
