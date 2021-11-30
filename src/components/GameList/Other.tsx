import React from 'react';
import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

const OtherContainer = styled.div``;

const Other = () => {
  return (
    <OtherContainer>
      Other
      <Outlet />
    </OtherContainer>
  );
};

export default Other;
