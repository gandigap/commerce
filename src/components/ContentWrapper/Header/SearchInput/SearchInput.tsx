import React from 'react';

import SearchIcon from 'images/search.svg';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

const SearchInputContainer = styled.div`
  display: flex;
  align-itens: center;
  background-color: var(--color-3);
`;

const Input = styled.input`
  padding: 0 12px 0 38px;
  background: url('${SearchIcon}') no-repeat scroll 16px;
  background-size: 14px;
  background-color: hsla(0, 0%, 100%, 0.16);
`;

const SearchInput = () => {
  return (
    <SearchInputContainer>
      <Input type="text" placeholder="Search 642,916 games" />
    </SearchInputContainer>
  );
};

export default SearchInput;
