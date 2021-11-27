import React, { useState } from 'react';

import { IGameCardProps } from 'models/IGame';

import styled from 'styled-components';
import 'react-awesome-slider/src/styles';

import GameCardMedia from './GameCardMedia';
import GameCardMainInfo from './GameCardMainInfo';
import GameCardAdditionalInfo from './GameCardAdditionalInfo';

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

const GameCard: React.FC<IGameCardProps> = ({ gameData }) => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <GameCardWrapper
      onMouseEnter={() => setHoverState(!hoverState)}
      onMouseLeave={() => setHoverState(!hoverState)}>
      <GameCardWrapperContent>
        <GameCardMedia cardHoverState={hoverState} gameData={gameData} />
        <GameCardMainInfo gameData={gameData} />
        <GameCardAdditionalInfo gameData={gameData} />
      </GameCardWrapperContent>
    </GameCardWrapper>
  );
};

export default GameCard;
