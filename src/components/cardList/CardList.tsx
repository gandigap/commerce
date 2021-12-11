import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { fetchGames } from 'store/reducers/ActionCreators';
import { IGame } from 'interfaces/gameInterfaces';
import GameCard from './gamesCard.tsx/GameCard';
import PageTitleContainer from 'components/sectionTitle/SectionTitle';

import styled from 'styled-components';

const CardListContainer = styled.div`
  display: grid;
  grid-gap: 20px;
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

const CardList = () => {
  const { games, isLoadingGames, errorFetchGames } = useAppSelector((state) => state.gameReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    games.length === 0 && dispatch(fetchGames());
  }, [dispatch, games.length]);

  return (
    <>
      <PageTitleContainer />
      <CardListContainer>
        {isLoadingGames && <h3>Идет загрузка</h3>}
        {errorFetchGames && <h3>{errorFetchGames}</h3>}
        {games.map((game: IGame) => (
          <GameCard key={game.id} gameData={game} />
        ))}
      </CardListContainer>
    </>
  );
};

export default CardList;
