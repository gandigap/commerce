import React from 'react';
import { Outlet } from 'react-router-dom'

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

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
