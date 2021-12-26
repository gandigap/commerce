import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch } from 'hooks/redux-hooks';
import { IGame } from 'interfaces/gameInterfaces';

import styled from 'styled-components';
import { fetchGame } from 'store/reducers/ActionCreators';


const SearchListItemContainer = styled.li`
  padding: 3px;

  &:hover {
    background-color: var(--color-1);
    color: var(--color-4);
  }

  & a {
    display: inline-block;
    width: 100%;
    padding: 1px;
    color: var(--color-5);
  }
`;

type IProps = {
  gameInfo: IGame;
};

const SearchListItem: React.FC<IProps> = ({ gameInfo }) => {
  const dispatch = useAppDispatch();
  const handlerClick = useCallback(() => {
    dispatch(fetchGame(gameInfo.slug));
  }, [dispatch, gameInfo.slug]);

  return (   
          <SearchListItemContainer key={gameInfo.slug}>
            <Link to={`games/${gameInfo.slug}`} onClick={handlerClick}>{gameInfo.name}</Link>
          </SearchListItemContainer>   
  );
};

export default SearchListItem;


