import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IGameCardProps } from 'interfaces/gameInterfaces';
import { useAppDispatch } from 'hooks/redux-hooks';

import { buttonFormAndCard } from 'styles/mixins';
import styled from 'styled-components';
import { userSlice } from 'store/reducers/UserSlice';

const GameCardAdditionalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  flex-grow: 1;
  position: relative;
  background-color: var(--color-1);
`;

const GameCardAdditionalInfoContainerSubject = styled.div`
  display: flex;
  padding: 5px;
  justify-content: space-between;
  color: var(--color-4);

  &:first-child:after {
    position: absolute;
    content: '';
    height: 1px;
    bottom: 65px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 80%;
    background-color: var(--color-3);
  }
`;

const GameCardAdditionalInfoContainerSubjectTitle = styled.h3`
  padding: 0 10px;
  font-weight: bold;
  min-width: 100px;
`;

const GameCardAdditionalInfoContainerSubjectContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  font-style: italic;
  color: var(--color-5);

  & a {
    padding: 1px;
    color: var(--color-5);
    &:hover {
      color: var(--color-info);
    }
  }
`;

const WishButton = styled.button`
  margin: 5px;
  ${buttonFormAndCard}
`;

const _gameCardSubTitles = {
  genres: ' Genres:',
  dateRelease: 'Release date:',
};

const _textPayButton = 'Add';

const GameCardAdditionalInfo: React.FC<IGameCardProps> = ({ gameData }) => {
  const dispatch = useAppDispatch();
  const handleWishButton = useCallback(() => {
    dispatch(userSlice.actions.addGameToWishList({ ...gameData }));
  }, [dispatch, gameData]);
  const genres = gameData.genres.map((genre: any) => {
    return (
      <Link key={`${gameData.id}_${genre.name}`} to={`games/${genre.slug}`}>
        {genre.name},
      </Link>
    );
  });

  const dateRelease = () => {
    const date = new Date(gameData.released).toDateString().split(' ');
    return `${date[1]} ${date[2]}, ${date[3]}`;
  };

  return (
    <GameCardAdditionalInfoContainer>
      <GameCardAdditionalInfoContainerSubject>
        <GameCardAdditionalInfoContainerSubjectTitle>
          {_gameCardSubTitles.genres}
        </GameCardAdditionalInfoContainerSubjectTitle>
        <GameCardAdditionalInfoContainerSubjectContent>
          {genres}
        </GameCardAdditionalInfoContainerSubjectContent>
      </GameCardAdditionalInfoContainerSubject>

      <GameCardAdditionalInfoContainerSubject>
        <GameCardAdditionalInfoContainerSubjectTitle>
          {_gameCardSubTitles.dateRelease}
        </GameCardAdditionalInfoContainerSubjectTitle>
        <GameCardAdditionalInfoContainerSubjectContent>
          {dateRelease()}
        </GameCardAdditionalInfoContainerSubjectContent>
      </GameCardAdditionalInfoContainerSubject>
      <WishButton onClick={handleWishButton}>
        {_textPayButton} <FontAwesomeIcon icon={faGift} className="fontawesome__icon" />
      </WishButton>
    </GameCardAdditionalInfoContainer>
  );
};

export default GameCardAdditionalInfo;
