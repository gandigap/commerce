import { IDataGeneral } from 'interfaces/dataInterfaces';
import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const GameDeveloperContainer = styled.div`
  height: 20px;
  & a {
    text-decoration: underline;
    color: var(--color-4);

    &:hover {
      color: var(--color-5);
    }
  }
`;

type Props = {
  developerInfo: IDataGeneral;
};

const GameDeveloper: React.FC<Props> = ({ developerInfo }) => {
  return (
    <GameDeveloperContainer>
      <Link to={`/developers/${developerInfo.id}`}>{developerInfo.name}</Link>
    </GameDeveloperContainer>
  );
};

export default GameDeveloper;
