import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

const SidebarContainer = styled.div`
  min-width: 200px;
  height: 250px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="platforms">platforms</Link>
      </div>
      <div>
        <Link to="stores">Stores</Link>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
