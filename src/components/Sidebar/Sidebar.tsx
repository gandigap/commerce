import React from 'react';

import styled from 'styled-components';

import Aside from './Aside';

const SidebarContainer = styled.div`
  min-width: 200px;
  height: 250px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Aside />
    </SidebarContainer>
  );
};

export default Sidebar;
