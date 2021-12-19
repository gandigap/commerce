import React, { useEffect } from 'react';

import { useParams, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { fetchGames, fetchGamesByParams } from 'store/reducers/ActionCreators';
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

const GameList = () => {
  const { games, isLoadingGames, errorFetchGames } = useAppSelector((state) => state.gameReducer);
  const dispatch = useAppDispatch();
  const params = useParams();
  const path = useLocation().pathname;

  useEffect(() => {
    console.log('games rerender');
    if (games.length === 0) {
      const pathParams = path.split('/');
      const category = pathParams[1];
      const value = pathParams[2];
      params.slug ? dispatch(fetchGamesByParams(category, value)) : dispatch(fetchGames());
    }
    console.log(params, 'params');
  }, [dispatch, games.length, params, path]);

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

export default GameList;
