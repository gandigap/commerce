import React from 'react';

import { IGame } from 'models/IGame';
import { faMobile, faGamepad } from '@fortawesome/free-solid-svg-icons';
import {
  faLinux,
  faApple,
  faWindows,
  faXbox,
  faPlaystation,
  faAndroid,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

const GameCardWrapper = styled.div`
  margin: 0 10px;
  overflow: hidden;
  border: 1px solid var(--color-3);
  border-radius: 20px;
  background-color: var(--color-2);

  &:hover {
    transition: all 0.3s;
    transform: scale(1.05);
  }
`;

const GameCardWrapperContent = styled.div`
  overflow: hidden;
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
  padding: 5px;
`;

const GameCardInfoPlatformsAndRateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const GameCardInfoPlatforms = styled.div`
  font-size: 16px;

  .fontawesome__icon {
    margin: 2px;
  }
`;

const GameCardInfoRate = styled.div`
  font-weigth: bold;
  color: var(--color-info);
  border: 1px solid var(--color-info);
`;

const GameCardInfoTitle = styled.h3`
  font-size: 24px;
`;

const GameCardInfoGenres = styled.div`
  color: var(--color-4);
`;
interface IGameCard {
  gameData: IGame;
}

const GameCard = ({ gameData }: IGameCard) => {
  const genres = gameData.genres.map((genre: any) => {
    return <span>{genre.name}</span>;
  });

  const getPlatformType = (type: string) => {
    switch (type) {
      case 'pc':
        return faWindows;
      case 'playstation':
        return faPlaystation;
      case 'xbox':
        return faXbox;
      case 'mac':
        return faApple;
      case 'linux':
        return faLinux;
      case 'ios':
        return faMobile;
      case 'android':
        return faAndroid;
      case 'nintendo':
        return faGamepad;
      default:
        return faGamepad;
    }
  };

  const platforms = gameData.parent_platforms.map((parent_platform: any) => {
    return (
      <FontAwesomeIcon
        key={`${gameData.id}_${parent_platform.platform.slug}`}
        icon={getPlatformType(parent_platform.platform.slug)}
        className="fontawesome__icon"
      />
    );
  });

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
          <GameCardInfoPlatformsAndRateContainer>
            <GameCardInfoPlatforms>{platforms}</GameCardInfoPlatforms>
            <GameCardInfoRate title={'Metascore'}>{gameData.metacritic}</GameCardInfoRate>
          </GameCardInfoPlatformsAndRateContainer>
          <GameCardInfoTitle>{gameData.name}</GameCardInfoTitle>
          <GameCardInfoGenres>
            Genres
            {genres}
          </GameCardInfoGenres>
        </GameCardInfo>
      </GameCardWrapperContent>
    </GameCardWrapper>
  );
};

export default GameCard;
