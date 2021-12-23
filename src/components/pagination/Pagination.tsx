import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import React, { useCallback, useEffect } from 'react';
import { fetchDataByCategory, fetchGames } from 'store/reducers/ActionCreators';
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

type IProps = {
  type: string;
  path?: string;
};

const Pagination: React.FC<IProps> = ({ type, path }) => {
  const { pageSizeNumber, pageNumber, pagesPrevAndNext } = useAppSelector(
    (state) => state.pageReducer,
  );
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
    type === 'games'
      ? dispatch(fetchGames(pageNumber, pageSizeNumber))
      : path && dispatch(fetchDataByCategory(path.slice(1), pageNumber, pageSizeNumber));
  }, [dispatch, pageNumber, pageSizeNumber, path, type]);

  const sizing = ['10', '20', '30'];
  console.log(pagesPrevAndNext[0], 'ssssss');
  return (
    <PaginationContainer>
      <Button
        onClick={handleChangePage}
        data-value={'prev'}
        className={pagesPrevAndNext[0] ? '' : 'disablePaginationButton'}>
        prev
      </Button>
      <select value={pageSizeNumber} onChange={handleChangePageSize}>
        {sizing.map((size) => (
          <option value={size} key={size}>
            {size}
          </option>
        ))}
      </select>
      <Button
        onClick={handleChangePage}
        data-value={'next'}
        className={pagesPrevAndNext[0] ? '' : 'disablePaginationButton'}>
        next
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
