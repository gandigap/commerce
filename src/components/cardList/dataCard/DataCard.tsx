import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { fetchGamesByParams } from 'store/reducers/ActionCreators';
import { IData } from 'interfaces/dataInterfaces';
import DataCardPositions from './DataCardPositions';
import DataCardInfoGames from './DataCardInfoGames';
import UserIcon from 'images/user.svg';

import styled from 'styled-components';

const DataCardWrapper = styled.div`
  padding: 10px;
  border: 1px solid var(--color-3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--color-1);
`;

const DataCardTitle = styled.h3`
  padding: 20px 0;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;

const DataCreatorImage = styled.img`
  margin: 10px auto;
  width: 60px;
  height: 60px;
  border: 1px solid #fff;
  border-radius: 50%;
`;

const GamesInfoWrapper = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: var(--color-5);
`;

const GamesInfoTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const GamesInfoValue = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

type IProps = {
  info: IData;
};

const DataCard: React.FC<IProps> = ({ info }) => {
  const path = useLocation().pathname;
  const dispatch = useAppDispatch();
  const category = path.slice(1);
  const handleClickTitle = useCallback(() => {
    dispatch(fetchGamesByParams(category, info.slug));
  }, []);

  return (
    <DataCardWrapper
      style={{
        backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.3), ${'var(--color-1)'} 85%),url(${
          info.image_background
        }) `,
      }}>
      <Link to={category === 'platforms' ? `${info.id}` : info.slug} onClick={handleClickTitle}>
        <DataCardTitle>{info.name}</DataCardTitle>
      </Link>
      {path.slice(1) === 'creators' && (
        <DataCreatorImage src={info.image ? info.image : UserIcon} />
      )}
      {info.positions && <DataCardPositions positions={info.positions} />}
      <GamesInfoWrapper>
        <GamesInfoTitle>Count games</GamesInfoTitle>
        <GamesInfoValue>{info.games_count}</GamesInfoValue>
        <DataCardInfoGames games={info.games} />
      </GamesInfoWrapper>
    </DataCardWrapper>
  );
};

export default DataCard;
