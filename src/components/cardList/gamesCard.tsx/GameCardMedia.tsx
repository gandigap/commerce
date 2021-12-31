import React from 'react';
import { IGame } from 'interfaces/gameInterfaces';
import AwesomeSlider from 'react-awesome-slider';

import styled from 'styled-components';

const GameCardMediaContainer = styled.div`
  position: relative;
  padding-bottom: 60%;
`;

const GameCardMediaSlider = styled.div`
  position: absolute;
  width: 100%;
`;

const GameCardImagePreview = styled.div`
  height: 100%;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
`;

interface IGameCardMedia {
  /* cardHoverState: boolean; */
  gameData: IGame;
}

const GameCardMedia: React.FC<IGameCardMedia> = ({ /* cardHoverState,  */ gameData }) => {
  const sliders = gameData.short_screenshots.map((screenshotData) => {
    return <div key={`${gameData.id}_${screenshotData.id}`} data-src={`${screenshotData.image}`} />;
  });

  return (
    <GameCardMediaContainer>
      <GameCardImagePreview
        style={{
          backgroundImage: `url(${gameData.background_image})`,
        }}
      />
      <GameCardMediaSlider /* style={{ width: `${cardHoverState ? '100%' : '0px'}` }} */>
        <AwesomeSlider className="aws-btn" bullets={false}>
          {sliders}
        </AwesomeSlider>
      </GameCardMediaSlider>
    </GameCardMediaContainer>
  );
};

export default GameCardMedia;
