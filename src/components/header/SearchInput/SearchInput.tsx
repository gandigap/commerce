import React, { useCallback, useState } from 'react';

import SearchIcon from 'images/search.svg';

import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { fetchSearchGame } from 'store/reducers/ActionCreators';
import useDebounce from 'hooks/debounce';

const SearchInputContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 0 50px;
  background-color: var(--color-3);
`;

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 0 12px 0 38px;
  background: url('${SearchIcon}') no-repeat scroll 16px;
  background-size: 14px;
  background-color: hsla(0, 0%, 100%, 0.16);
`;

const SearchInput = () => {
  const { searchGames, isLoading, error } = useAppSelector((state) => state.searchReducer);
  const [search, setSearch] = useState(false);
  const dispatch = useAppDispatch();

  const searchE = (val: string) => {
    dispatch(fetchSearchGame(val));
  };
  const debounceSearch = useDebounce(searchE, 3000);

  const handleSearch = useCallback(
    (event) => {
      debounceSearch(event.target.value);
    },
    [debounceSearch],
  );

  return (
    <SearchInputContainer>
      <Input type="text" placeholder="Search 642,916 games" onChange={handleSearch} />
      {}
    </SearchInputContainer>
  );
};

export default SearchInput;
