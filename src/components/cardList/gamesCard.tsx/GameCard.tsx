import React from 'react';

import { IGameCardProps } from 'interfaces/gameInterfaces';
import GameCardAdditionalInfo from './GameCardAdditionalInfo';
import GameCardInfo from './GameCardInfo';
import GameCardMedia from './GameCardMedia';

import styled from 'styled-components';
import 'react-awesome-slider/src/styles';

const GameCardWrapper = styled.div`
  &:hover {
    transition: all 0.3s;
    transform: scale(1.02);
    position: relative;
    z-index: 3;

    & > div {
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

  &:hover {
    & > div:last-child {
      display: flex;
    }
  }
`;

const GameCard: React.FC<IGameCardProps> = ({ gameData }) => {
  return (
    <GameCardWrapper>
      <GameCardWrapperContent>
        <GameCardMedia gameData={gameData} />
        <GameCardInfo gameData={gameData} />
        <GameCardAdditionalInfo gameData={gameData} />
      </GameCardWrapperContent>
    </GameCardWrapper>
  );
};

export default GameCard;
