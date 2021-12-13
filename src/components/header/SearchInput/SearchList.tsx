import React from 'react';

import { useAppSelector } from 'hooks/redux-hooks';
import { IGame } from 'interfaces/gameInterfaces';

import styled from 'styled-components';
import SearchListItem from './SearchListItem';

const SearchListContainer = styled.ul`
  position: absolute;
  z-index: 2;
  top: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: var(--color-4);
`;

type IProps = {
  display: boolean;
};

const SearchList: React.FC<IProps> = ({ display }) => {
  const { searchGames, isLoading, error } = useAppSelector((state) => state.searchReducer);

  return (
    <SearchListContainer style={{ display: `${display ? 'block' : 'none'}` }}>
      {searchGames.map((game: IGame) => {
        return <SearchListItem key={game.slug} gameInfo={game} />;
      })}
    </SearchListContainer>
  );
};

export default SearchList;
