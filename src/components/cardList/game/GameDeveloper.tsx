import { IData } from 'interfaces/dataInterfaces';
import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const GameDeveloperContainer = styled.div`
  & {
    text-decoration: underline;
    color: var(--color-5);

    &:hover {
      color: var(--color-4);
    }
  }
`;

type Props = {
  developerInfo: IData;
};

const GameDeveloper: React.FC<Props> = ({ developerInfo }) => {
  return (
    <Link to={`/developers/${developerInfo.id}`}>
      {' '}
      <GameDeveloperContainer>{developerInfo.name}</GameDeveloperContainer>
    </Link>
  );
};

export default GameDeveloper;
