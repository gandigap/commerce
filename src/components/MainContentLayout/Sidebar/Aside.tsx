import React from 'react';
import { Link } from 'react-router-dom';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

const AsideContainer = styled.aside`
  background-color: var(--color-3);
`;

const AsideTitle = styled.h3`
  background-color: var(--color-3);
`;

const Aside = () => {
  return (
    <AsideContainer>
      <AsideTitle>Brows</AsideTitle>
      <div>
        <FontAwesomeIcon icon={faCoffee} />
        <Link to="/">Home</Link>
      </div>
      <div>
        <FontAwesomeIcon icon={faCoffee} />
        <Link to="platforms">platforms</Link>
      </div>
      <div>
        <FontAwesomeIcon icon={faCoffee} />
        <Link to="stores">stores</Link>
      </div>
    </AsideContainer>
  );
};

export default Aside;
