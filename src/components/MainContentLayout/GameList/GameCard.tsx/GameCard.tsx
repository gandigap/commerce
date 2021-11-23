import React from 'react';

import { IGame } from 'models/IGame';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

const GameCardWrapper = styled.div`
  border: 1px solid var(--color-4);
  background-color: var(--color-3);
`;

const GameCardWrapperContent = styled.div`
  overflow: hidden;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.05);
  }
`;

const GameCardMedia = styled.div`
  position: relative;
  padding-bottom: 60%;
`;

const GameCardImagePreview = styled.div`
  height: 100%;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
`;

const GameCardInfo = styled.div`
  background-color: var(--color-2);
`;

const GameCardInfoTitle = styled.h3`
  font-size: 24px;
`;

const GameCardInfoGenres = styled.div`
  font-size: 12px;

  &:hover svg {
    fill: red;
  }
`;
interface IGameCard {
  gameData: IGame;
}
const element = <FontAwesomeIcon icon={faCoffee} spin />;
const GameCard = ({ gameData }: IGameCard) => {
  return (
    <GameCardWrapper>
      <GameCardWrapperContent>
        <GameCardMedia>
          <GameCardImagePreview
            style={{
              backgroundImage: 'url(' + gameData.background_image + ')',
            }}
          />
        </GameCardMedia>
        <GameCardInfo>
          <GameCardInfoTitle>{gameData.name}</GameCardInfoTitle>
          <GameCardInfoGenres>
            Genres
            {gameData.genres.map((genre: any) => {
              return <span>{genre.name}</span>;
            })}
            {element}
          </GameCardInfoGenres>
        </GameCardInfo>
      </GameCardWrapperContent>
    </GameCardWrapper>
  );
};

export default GameCard;
