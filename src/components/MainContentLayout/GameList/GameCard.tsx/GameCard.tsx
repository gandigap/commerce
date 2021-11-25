import React, { useState } from 'react';

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

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/src/styles';

const GameCardWrapper = styled.div`
  margin: 10px 0px;
  overflow: hidden;
  border: 1px solid var(--color-1);
  border-radius: 20px;
  background-color: var(--color-2);
  -webkit-box-shadow: 0px 0px 5px 0px var(--color-4);
  box-shadow: 0px 0px 5px 0px var(--color-4);

  &:hover {
    transition: all 0.3s;
    transform: scale(1.02);
    -webkit-box-shadow: 0px 0px 10px 0px var(--color-4);
    box-shadow: 0px 0px 10px 0px var(--color-4);
  }

  .aws-btn {
    --slider-height-percentage: 60%;
    --slider-transition-duration: 300ms;
    --organic-arrow-thickness: 5px;
    --organic-arrow-border-radius: 0px;
    --organic-arrow-height: 20px;
    --organic-arrow-color: var(--color-1);
    --control-button-width: 15%;
    --control-button-height: 25%;
    --control-button-background: transparent;
    --loader-bar-color: var(--color-5);
    --loader-bar-height: 5px;
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

const GameCardMediaSlider = styled.div`
  position: absolute;
`;

const GameCardInfo = styled.div`
  padding: 5px;
`;

const GameCardAdditionalInfo = styled.div`
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
  padding: 2px;
  border-radius: 100%;
  border: 1px solid var(--color-info);
  font-weight: bold;
  color: var(--color-info);
`;

const GameCardInfoTitle = styled.h3`
  font-size: 24px;
`;

const GameCardGenres = styled.div`
display:flex:

  color: var(--color-4);
`;
interface IGameCard {
  gameData: IGame;
}

const GameCard = ({ gameData }: IGameCard) => {
  const [hoverState, setHoverState] = useState(false);
  const genres = gameData.genres.map((genre: any) => {
    return <span key={`${gameData.id}_${genre.name}`}>{genre.name}</span>;
  });

  const sliders = gameData.short_screenshots.map((screenshotData: any) => {
    return <div key={`${gameData.id}_${screenshotData.id}`} data-src={`${screenshotData.image}`} />;
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
    const slug: string = parent_platform.platform.slug;
    return (
      <FontAwesomeIcon
        title={`${slug}`}
        key={`${gameData.id}_${slug}`}
        icon={getPlatformType(slug)}
        className="fontawesome__icon"
      />
    );
  });

  return (
    <GameCardWrapper
      onMouseEnter={() => setHoverState(!hoverState)}
      onMouseLeave={() => setHoverState(!hoverState)}>
      <GameCardWrapperContent>
        <GameCardMedia>
          <GameCardImagePreview
            style={{
              backgroundImage: 'url(' + gameData.background_image + ')',
            }}
          />
          <GameCardMediaSlider style={{ width: `${hoverState ? '100%' : '0px'}` }}>
            <AwesomeSlider className="aws-btn" bullets={false}>
              {sliders}
            </AwesomeSlider>
          </GameCardMediaSlider>
        </GameCardMedia>

        <GameCardInfo>
          <GameCardInfoPlatformsAndRateContainer>
            <GameCardInfoPlatforms>{platforms}</GameCardInfoPlatforms>
            <GameCardInfoRate title={'Metascore'}>{gameData.metacritic}</GameCardInfoRate>
          </GameCardInfoPlatformsAndRateContainer>
          <GameCardInfoTitle>{gameData.name}</GameCardInfoTitle>
        </GameCardInfo>
        <GameCardAdditionalInfo>
          <GameCardGenres>
            <span>Genres</span>
            {genres}
          </GameCardGenres>
        </GameCardAdditionalInfo>
      </GameCardWrapperContent>
    </GameCardWrapper>
  );
};

export default GameCard;
