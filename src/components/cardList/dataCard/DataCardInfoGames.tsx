import React from 'react';

import { IGeneralInfo } from 'interfaces/dataInterfaces';

import styled from 'styled-components';

const DataCardInfoGamesContainer = styled.div`
  width: 100%;
  color: var(--color-5);

  & :last-child {
    border: none;
  }
`;

const DataCardGameListItem = styled.div`
  padding: 3px 0px;
  font-size: 12px;
  border-bottom: 1px solid var(--color-4); ;
`;
const DataCardGameListTitle = styled.h3`
  margin: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: var(--color-info);
`;

type IProps = {
  games: IGeneralInfo[];
};

const DataCardInfoGames: React.FC<IProps> = ({ games }) => {
  return (
    <DataCardInfoGamesContainer>
      <DataCardGameListTitle>Top list</DataCardGameListTitle>
      {games.map((game: IGeneralInfo, index: number) => {
        return (
          index < 3 && <DataCardGameListItem key={game.slug}>{`${game.slug}`}</DataCardGameListItem>
        );
      })}
    </DataCardInfoGamesContainer>
  );
};

export default DataCardInfoGames;
