import { IGameCardProps } from 'models/IGame';
import React from 'react';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

const GameCardAdditionalInfoContainer = styled.div`
  padding: 5px;
`;

const GameCardAdditionalInfoContainerSubject = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-4);
`;

const GameCardAdditionalInfoContainerSubjectTitle = styled.span`
  font-weight: bold;
`;

const GameCardAdditionalInfoContainerSubjectContent = styled.span`
  font-style: italic;
`;

const GameCardAdditionalInfo: React.FC<IGameCardProps> = ({ gameData }) => {
  const genres = gameData.genres.map((genre: any) => {
    return (
      <>
        <span key={`${gameData.id}_${genre.name}`}>{genre.name}</span>,
      </>
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
