import React from 'react';

import { Link } from 'react-router-dom';
import { IGameCardProps } from 'models/gameInterfaces';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

const GameCardAdditionalInfoContainer = styled.div`
  background-color: var(--color-1);
  flex-shrink: 1;
  flex-grow: 1;
`;

const GameCardAdditionalInfoContainerSubject = styled.div`
  display: flex;
  padding: 5px;
  justify-content: space-between;
  color: var(--color-4);
`;

const GameCardAdditionalInfoContainerSubjectTitle = styled.span`
  margin: 0 10px;
  font-weight: bold;
`;

const GameCardAdditionalInfoContainerSubjectContent = styled.span`
  font-style: italic;
  color: var(--color-5);
  & a {
    color: var(--color-5);
    padding: 1px;
    &:hover {
      color: var(--color-info);
    }
  }
`;

const GameCardAdditionalInfo: React.FC<IGameCardProps> = ({ gameData }) => {
  const genres = gameData.genres.map((genre: any) => {
    return (
      <Link key={`${gameData.id}_${genre.name}`} to={`games/${genre.slug}`}>
        {genre.name},{' '}
      </Link>
    );
  });

  return (
    <GameCardAdditionalInfoContainer>
      <GameCardAdditionalInfoContainerSubject>
        <GameCardAdditionalInfoContainerSubjectTitle>
          Genres
        </GameCardAdditionalInfoContainerSubjectTitle>
        <GameCardAdditionalInfoContainerSubjectContent>
          {genres}
        </GameCardAdditionalInfoContainerSubjectContent>
      </GameCardAdditionalInfoContainerSubject>
    </GameCardAdditionalInfoContainer>
  );
};

export default GameCardAdditionalInfo;
