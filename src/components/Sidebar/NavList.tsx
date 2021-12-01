import React from 'react';
import { Link } from 'react-router-dom';

import {
  faHome,
  faProjectDiagram,
  faDatabase,
  faUsers,
  faDice,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';
import { headerAndFormLink } from 'styles/mixins';

import { _listNavTitles } from 'constants/constants';

const NavListContainer = styled.ul`
  margin: 20px 0;
`;

const NavListItem = styled.li`
  margin: 5px 0;

  display: flex;
  align-items: center;
  font-size: 20px;

  & a {
    ${headerAndFormLink}
  }
`;

const NavListIconContainer = styled.div`
  width: 20px;
`;

const _listNavIcons = [faHome, faProjectDiagram, faDatabase, faUsers, faDice];

const NavList = () => {
  return (
    <NavListContainer>
      {_listNavTitles.map((item: string, index: number) => (
        <NavListItem key={`navlink_${item}`}>
          <NavListIconContainer>
            <FontAwesomeIcon icon={_listNavIcons[index]} />
          </NavListIconContainer>

          <Link to={`${item.toLowerCase()}`}>{item}</Link>
        </NavListItem>
      ))}
    </NavListContainer>
  );
};

export default NavList;
