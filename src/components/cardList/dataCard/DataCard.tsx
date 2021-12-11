import React from 'react';
import { Link } from 'react-router-dom';

import { IData } from 'interfaces/dataInterfaces';
import DataCardPositions from './DataCardPositions';
import DataCardInfoGames from './DataCardInfoGames';

import styled from 'styled-components';

const DataCardWrapper = styled.div`
  margin: 10px;
  border: 1px solid var(--color-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--color-1);
`;

const DataCardTitle = styled.h3`
  padding: 20px 0;
  font-size: 24px;
  font-weight: bold;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;

const DataCreatorImage = styled.img`
  margin: 10px 0;
  width: 60px;
  height: 60px;
  border: 1px solid #fff;
  border-radius: 50%;
`;

const GamesInfoWrapper = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: var(--color-5);
`;

const GamesInfoTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const GamesInfoValue = styled.div``;

type IProps = {
  info: IData;
};

const DataCard: React.FC<IProps> = ({ info }) => {
  return (
    <DataCardWrapper
      style={{
        backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.3), ${'var(--color-1)'} 85%),url(${
          info.image_background
        }) `,
      }}>
      <Link to={`games/${info.slug}`}>
        <DataCardTitle>{info.name}</DataCardTitle>
      </Link>
      {info.image && <DataCreatorImage src={info.image} />}
      {info.positions && <DataCardPositions positions={info.positions} />}
      <GamesInfoWrapper>
        <GamesInfoTitle>Count games</GamesInfoTitle>
        <GamesInfoValue>{info.games_count}</GamesInfoValue>
      </GamesInfoWrapper>

      <DataCardInfoGames games={info.games} />
    </DataCardWrapper>
  );
};

export default DataCard;
