import React from 'react';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

const SidebarContainer = styled.div``;

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
    </SidebarContainer>
  );
};

export default Sidebar;
