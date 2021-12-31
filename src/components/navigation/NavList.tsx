import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { _listNavTitles } from 'constants/constants';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { fetchDataByCategory } from 'store/reducers/ActionCreators';
import { pageSlice } from 'store/reducers/PageSlice';

import { faProjectDiagram, faDatabase, faUsers, faDice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';
import { headerAndFormLink } from 'styles/mixins';

const NavListContainer = styled.ul`
  margin: 20px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const NavListItem = styled.li`
  margin: 5px 0;
  display: flex;
  align-items: center;
  font-size: 20px;

  &:hover {
    & div {
      color: var(--color-1);
      background-color: var(--color-5);
    }
  }

  & a {
    ${headerAndFormLink}
  }
`;

const NavListIconContainer = styled.div`
  padding: 5px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 22px;
  border-radius: 5px;

  & .nav_icon {
    width: 20px;
    height: 20px;
  }
`;

const _listNavIcons = [faProjectDiagram, faDatabase, faUsers, faDice];

const NavList = () => {
  const { pageNumber, pageSizeNumber } = useAppSelector((state) => state.pageReducer);
  const { setPageCategory, setPageNumber } = pageSlice.actions;
  const dispatch = useAppDispatch();

  const handlerClick = useCallback(
    (category: string) => () => {
      const _numberFirstPage = 1;
      dispatch(setPageNumber(_numberFirstPage));
      dispatch(setPageCategory(category));
      dispatch(fetchDataByCategory(category, pageNumber, pageSizeNumber));
    },
    [dispatch, pageNumber, pageSizeNumber, setPageCategory, setPageNumber],
  );

  return (
    <NavListContainer>
      {_listNavTitles.map((item: string, index: number) => (
        <NavListItem key={`navlink_${item}`}>
          <NavListIconContainer>
            <FontAwesomeIcon className="nav_icon" icon={_listNavIcons[index]} />
          </NavListIconContainer>
          <Link to={`${item.toLowerCase()}`} onClick={handlerClick(item.toLowerCase())}>
            {item}
          </Link>
        </NavListItem>
      ))}
    </NavListContainer>
  );
};

export default NavList;
