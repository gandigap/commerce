import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import React, { useCallback, useEffect } from 'react';
import { fetchGames } from 'store/reducers/ActionCreators';
import { pageSlice } from 'store/reducers/PageSlice';

import styled from 'styled-components';

const PaginationContainer = styled.div`
  margin: 10px 0;
`;

const Button = styled.button`
  font-size: 18px;
  padding: 5px;
  border: none;
  cursor: pointer;
  color: var(--color-5);

  &:hover {
    color: var(--color-info);
  }
`;

const Pagination = () => {
  const { pageSizeNumber, pageNumber } = useAppSelector((state) => state.pageReducer);
  const dispatch = useAppDispatch();
  const handleChangePageSize = useCallback(
    (e) => {
      const value = parseInt(e.target.value);
      dispatch(pageSlice.actions.setPageSizeNumber(value));
    },
    [dispatch],
  );

  const handleChangePage = useCallback(
    (e) => {
      const value = e.target.getAttribute('data-value');
      const number = value === 'prev' ? pageNumber - 1 : pageNumber + 1;
      dispatch(pageSlice.actions.setPageNumber(number));
    },
    [dispatch, pageNumber],
  );

  useEffect(() => {
    dispatch(fetchGames(pageNumber, pageSizeNumber));
  }, [dispatch, pageNumber, pageSizeNumber]);

  const sizing = ['10', '20', '30'];
  return (
    <PaginationContainer>
      <Button onClick={handleChangePage} data-value={'prev'}>
        prev
      </Button>
      <select value={pageSizeNumber} onChange={handleChangePageSize}>
        {sizing.map((size) => (
          <option value={size} key={size}>
            {size}
          </option>
        ))}
      </select>
      <Button onClick={handleChangePage} data-value={'next'}>
        next
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
