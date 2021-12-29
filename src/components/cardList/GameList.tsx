import React, { useEffect } from 'react';

import { useParams, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { fetchGames, fetchGamesByParams } from 'store/reducers/ActionCreators';
import { IGame } from 'interfaces/gameInterfaces';
import GameCard from './gamesCard.tsx/GameCard';
import PageTitleContainer from 'components/sectionTitle/SectionTitle';
import Pagination from 'components/pagination/Pagination';
import Spinner from 'components/spinner/Spinner';

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
  const { games, isLoading, error } = useAppSelector((state) => state.gameReducer);
  const { pageSizeNumber, pageNumber } = useAppSelector((state) => state.pageReducer);
  const dispatch = useAppDispatch();
  const params = useParams();
  const path = useLocation().pathname;

  useEffect(() => {
    const pathParams = path.split('/');
    const category = pathParams[1];
    const value = pathParams[2];
    params.slug
      ? dispatch(fetchGamesByParams(category, value, pageNumber, pageSizeNumber))
      : dispatch(fetchGames(pageNumber, pageSizeNumber));
  }, [dispatch, games.length, pageNumber, pageSizeNumber, params.slug, path]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <>
      <PageTitleContainer />
      <CardListContainer>
        {games.map((game: IGame) => (
          <GameCard key={game.id} gameData={game} />
        ))}
      </CardListContainer>
      <Pagination type={`games`} />
    </>
  );
};

export default GameList;
