import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { pageSlice } from 'store/reducers/PageSlice';
import { _sizePagination } from 'constants/constants';

import ArrowLeft from 'images/arrowLeft.png';
import ArrowRight from 'images/arrowRight.png';

import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0;
`;

const PaginationSelect = styled.select`
  background-color: var(--color-2);
  border-radius: 5px;
  color: var(--color-5);
  cursor: pointer;
`;

const PaginationButton = styled.button`
  margin: 0 10px;
  width: 32px;
  height: 32px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: var(--color-5);

  &:hover {
    color: var(--color-info);
  }

  &.disablePaginationButton {
    opacity: 0.3;
    cursor: auto;
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
  const { setPageSizeNumber, setPageNumber } = pageSlice.actions;
  const dispatch = useAppDispatch();

  const handleChangePageSize = useCallback(
    (e) => {
      const value = parseInt(e.target.value);
      dispatch(setPageSizeNumber(value));
    },
    [dispatch, setPageSizeNumber],
  );

  const handleChangePage = useCallback(
    (e) => {
      if (!e.target.getAttribute('class').includes('disablePaginationButton')) {
        const value = e.target.getAttribute('data-value');
        const number = value === 'prev' ? pageNumber - 1 : pageNumber + 1;
        dispatch(setPageNumber(number));
      }
    },
    [dispatch, pageNumber, setPageNumber],
  );

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={handleChangePage}
        data-value={'prev'}
        style={{ background: `url('${ArrowLeft}'),var(--color-3)` }}
        className={pagesPrevAndNext[0] ? '' : 'disablePaginationButton'}
      />
      <PaginationSelect value={pageSizeNumber} onChange={handleChangePageSize}>
        {_sizePagination.map((size) => (
          <option value={size} key={size}>
            {size}
          </option>
        ))}
      </PaginationSelect>
      <PaginationButton
        onClick={handleChangePage}
        data-value={'next'}
        style={{ background: `url('${ArrowRight}'),var(--color-3)` }}
        className={pagesPrevAndNext[1] ? '' : 'disablePaginationButton'}
      />
    </PaginationContainer>
  );
};

export default Pagination;
