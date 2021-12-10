import React from 'react';
import { Link } from 'react-router-dom';

import { IData } from 'interfaces/dataInterfaces';

import styled from 'styled-components';
import DataCardPositions from './DataCardPositions';

const DataCardWrapper = styled.div`
  border: 1px solid var(--color-3);
  text-align: center;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--color-1);
`;

const DataCardTitle = styled.h3`
  padding: 20px 40px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;

const DataCreatorImage = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid #fff;
  border-radius: 50%;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const GamesCountWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

type IProps = {
  info: IData;
};

const DataCard: React.FC<IProps> = ({ info }) => {
  return (
    <DataCardWrapper
      style={{
        backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.3), ${'var(--color-1)'} 80%),url(${
          info.image_background
        }) `,
      }}>
      <Link to={`games/${info.slug}`}>
        <DataCardTitle>{info.name}</DataCardTitle>
        {info.image && (
          <DataCreatorImage
            style={{
              backgroundImage: `url(${info.image})`,
            }}
          />
        )}
      </Link>
      {info.positions && <DataCardPositions positions={info.positions} />}
    </DataCardWrapper>
  );
};

export default DataCard;
