import React from 'react';

import { IGeneralInfo } from 'interfaces/dataInterfaces';

import styled from 'styled-components';

const DataCardInfoGamesContainer = styled.div`
  color: var(--color-5);
`;

const DataCardGameList = styled.div`
  font-size: 12px;
`;

type IProps = {
  games: IGeneralInfo[];
};

const DataCardInfoGames: React.FC<IProps> = ({ games }) => {
  return (
    <DataCardInfoGamesContainer>
      {games.map((game: IGeneralInfo, index: number) => {
        return index < 3 && <DataCardGameList key={game.slug}>{`${game.slug}`}</DataCardGameList>;
      })}
    </DataCardInfoGamesContainer>
  );
};

export default DataCardInfoGames;
