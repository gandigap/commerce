import { IGame } from 'models/IGame';
import React from 'react';

import styled from 'styled-components';

const GameCardContainer = styled.div`
  position: relative;
  width: 250px;
  border: 1px solid var(--color-4);
`;
interface IGameCard {
  gameData: IGame;
}

const GameCard = ({ gameData }: IGameCard) => {
  return <GameCardContainer>{gameData.name}</GameCardContainer>;
};

export default GameCard;
