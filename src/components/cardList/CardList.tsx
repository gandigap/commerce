import React, { useEffect } from 'react';

import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { fetchGames } from 'store/reducers/ActionCreators';
import { IGame } from 'interfaces/gameInterfaces';
import GameCard from './gamesCard.tsx/GameCard';
import PageTitleContainer from 'components/pageTitle/PageTitle';
import { useLocation } from 'react-router-dom';
import { IData } from 'interfaces/dataInterfaces';
import DataCard from './dataCard/DataCard';

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
  const { data, isLoading, error } = useAppSelector((state) => state.dataReducer);
  const dispatch = useAppDispatch();
  const path = useLocation().pathname;

  console.log(path, 'location');

  useEffect(() => {
    games.length === 0 && dispatch(fetchGames());
  }, [dispatch, games.length]);

  return (
    <>
      <PageTitleContainer />
      <CardListContainer>
        {isLoadingGames && <h3>Идет загрузка</h3>}
        {errorFetchGames && <h3>{errorFetchGames}</h3>}
        {path === '/' || path === '/games'
          ? games.map((game: IGame) => <GameCard key={game.id} gameData={game} />)
          : data.map((dataInfo: IData) => <DataCard key={dataInfo.id} info={dataInfo} />)}
      </CardListContainer>
    </>
  );
};

export default CardList;
