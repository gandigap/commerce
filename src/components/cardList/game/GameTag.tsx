import { IDataGeneral } from 'interfaces/dataInterfaces';
import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const GameTagContainer = styled.div`
  height: 20px;
  & a {
    padding: 3px;
    border-radius: 10px;
    background-color: var(--color-4);
    color: var(--color-1);

    &:hover {
      color: var(--color-5);
      background-color: var(--color-3);
    }
  }
`;

type Props = {
  tagInfo: IDataGeneral;
};

const GameTag: React.FC<Props> = ({ tagInfo }) => {
  return (
    <GameTagContainer>
      <Link to={`/tag/${tagInfo.id}`}>{tagInfo.name.toLowerCase()}</Link>
    </GameTagContainer>
  );
};

export default GameTag;
