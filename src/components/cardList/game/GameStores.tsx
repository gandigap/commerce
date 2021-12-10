import { IData } from 'interfaces/dataInterfaces';
import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const GameStoreContainer = styled.div`
  & {
    padding: 5px;
    border: 1px solid var(--color-5);
    color: var(--color-5);
    background-color: var(--color-1);

    &:hover {
      color: var(--color-4);
    }
  }
`;

type Props = {
  storeInfo: IData;
};

const GameStore: React.FC<Props> = ({ storeInfo }) => {
  return (
    <Link to={`/stores/${storeInfo.id}`}>
      <GameStoreContainer>{storeInfo.name}</GameStoreContainer>
    </Link>
  );
};

export default GameStore;
