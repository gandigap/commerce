import { IDataGeneral } from 'interfaces/dataInterfaces';
import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const GameStoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & a {
    color: var(--color-4);

    &:hover {
      color: var(--color-5);
    }
  }
`;
const GameStoreIcon = styled.div`
  height: 20px;
  width:20px;
  background-color: var(--color-4);
  border-radius:50%;
  }
`;

type Props = {
  storeInfo: IDataGeneral;
};

const GameStore: React.FC<Props> = ({ storeInfo }) => {
  return (
    <GameStoreContainer>
      <GameStoreIcon></GameStoreIcon>
      <Link to={`/stores/${storeInfo.id}`}>{storeInfo.name}</Link>
    </GameStoreContainer>
  );
};

export default GameStore;
