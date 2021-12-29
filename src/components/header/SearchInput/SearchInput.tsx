import React, { useCallback, useState } from 'react';

import SearchIcon from 'images/search.svg';
import { useAppDispatch } from 'hooks/redux-hooks';
import { fetchSearchGame } from 'store/reducers/ActionCreators';
import useDebounce from 'hooks/debounce';

import styled from 'styled-components';
import SearchList from './SearchList';
import { searchSlice } from 'store/reducers/SearchSlice';

const SearchInputContainer = styled.div`
  position: relative;
  width: 500px;
  height: 50px;
  margin: 0 50px;
  display: flex;
  border-radius: 23px;
  background-color: var(--color-3);

  @media (max-width: 992px) {
    width: 400px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding: 0 12px 0 38px;
  background: url('${SearchIcon}') no-repeat scroll 16px;
  background-size: 14px;
  background-color: hsla(0, 0%, 100%, 0.16);

  &:focus {
    outline: none;
  }
`;

const SearchInput = () => {
  const [displayListMode, setDisplayListMode] = useState(false);

  const dispatch = useAppDispatch();

  const searchQuery = (query: string) => {
    dispatch(fetchSearchGame(query));
  };

  const changeDisplay = () => {
    setDisplayListMode(!displayListMode);
    !displayListMode && dispatch(searchSlice.actions.clearSearchList());
  };

  const debounceSearch = useDebounce(searchQuery, 500);
  const debounceChangeDisplay = useDebounce(changeDisplay, 500);

  const handleSearch = useCallback(
    (event) => {
      debounceSearch(event.target.value);
    },
    [debounceSearch],
  );

  const handleChangeDisplay = useCallback(
    (event) => {
      event.target.value = '';
      debounceChangeDisplay();
    },
    [debounceChangeDisplay],
  );

  return (
    <SearchInputContainer>
      <Input
        type="text"
        placeholder="Search 642,916 games"
        onChange={handleSearch}
        onFocus={handleChangeDisplay}
        onBlur={handleChangeDisplay}
      />
      <SearchList display={displayListMode} />
    </SearchInputContainer>
  );
};

export default SearchInput;
