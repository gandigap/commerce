import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

const SidebarContainer = styled.div`
  width: 150px;
  height: 250px;
  border-right: 1px solid black;
`;

const Sidebar = () => {
  const getData = () => {
    fetch('https://api.rawg.io/api/platforms?key=dc31c2a55aa444959f74eb7bc96b0617')
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <SidebarContainer>
      <button onClick={getData}>Get data</button>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="platforms">platforms</Link>
        </li>
        <li>
          <Link to="stores">Stores</Link>
        </li>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
