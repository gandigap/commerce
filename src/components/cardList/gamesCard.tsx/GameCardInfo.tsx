import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch } from 'hooks/redux-hooks';
import { fetchGame } from 'store/reducers/ActionCreators';
import { IDataGameParentPlatforms, IGameCardProps } from 'interfaces/gameInterfaces';

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
const GameCardInfoContainer = styled.div`
  padding: 5px;

  & a {
    color: var(--color-5);

    &:hover {
      color: var(--color-1);
      text-shadow: 0px 0px 4px var(--color-5);
    }
  }
`;

const GameCardMainInfoContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GameCardPlatforms = styled.div`
  font-size: 16px;

  .fontawesome__icon {
    margin: 2px;
  }
`;

const GameCardRate = styled.div`
  padding: 2px;
  border-radius: 100%;
  border: 1px solid var(--color-info);
  font-weight: bold;
  color: var(--color-info);
`;

const GameCardTitle = styled.h3`
  font-size: 24px;
  height: 50px;
`;

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

const GameCardInfo: React.FC<IGameCardProps> = ({ gameData }) => {
  const dispatch = useAppDispatch();

  const handlerClick = useCallback(() => {
    dispatch(fetchGame(gameData.slug));
  }, [dispatch, gameData.slug]);

  const platforms = gameData.parent_platforms.map((parent_platform: IDataGameParentPlatforms) => {
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
    <GameCardInfoContainer>
      <GameCardMainInfoContent>
        <GameCardPlatforms>{platforms}</GameCardPlatforms>
        {gameData.metacritic && (
          <GameCardRate title={'Metascore'}>{gameData.metacritic}</GameCardRate>
        )}
      </GameCardMainInfoContent>
      <Link to={`/games/${gameData.slug}`} onClick={handlerClick}>
        <GameCardTitle>{gameData.name}</GameCardTitle>
      </Link>
    </GameCardInfoContainer>
  );
};

export default GameCardInfo;
