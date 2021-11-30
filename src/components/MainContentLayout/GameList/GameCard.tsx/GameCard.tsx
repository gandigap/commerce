import React, { useState } from 'react';

import { IGameCardProps } from 'models/gameInterfaces';

import styled from 'styled-components';
import 'react-awesome-slider/src/styles';

import GameCardMedia from './GameCardMedia';
import GameCardInfo from './GameCardInfo';
import GameCardAdditionalInfo from './GameCardAdditionalInfo';

const GameCardWrapper = styled.div`
  width: 40%;
  margin: 10px;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.02);
    position: relative;
    z-index: 1;

    .card-open {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      -webkit-box-shadow: 0px 0px 10px 0px var(--color-4);
      box-shadow: 0px 0px 10px 0px var(--color-4);
    }
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
  border-radius: 20px;
  border: 1px solid var(--color-1);
  background-color: var(--color-2);
  -webkit-box-shadow: 0px 0px 5px 0px var(--color-4);
  box-shadow: 0px 0px 5px 0px var(--color-4);
`;

const GameCard: React.FC<IGameCardProps> = ({ gameData }) => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <GameCardWrapper
      onMouseEnter={() => setHoverState(!hoverState)}
      onMouseLeave={() => setHoverState(!hoverState)}>
      <GameCardWrapperContent className={hoverState ? 'card-open' : ''}>
        <GameCardMedia cardHoverState={hoverState} gameData={gameData} />
        <GameCardInfo gameData={gameData} />
        {hoverState ? <GameCardAdditionalInfo gameData={gameData} /> : null}
      </GameCardWrapperContent>
    </GameCardWrapper>
  );
};

export default GameCard;
