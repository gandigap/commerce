import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import styled from 'styled-components';

const SectionTitleContainer = styled.div`
  margin: 10px 0;
`;

const Title = styled.h3`
  font-size: 36px;
  font-weight: bold;
  padding: 20px 0;
`;

const SectionTitle = () => {
  const path = useLocation().pathname;
  const params = useParams();

  return (
    <SectionTitleContainer>
      <Title>
        {params.slug ? params.slug : path === '/' ? 'GAMES' : path.slice(1).toUpperCase()}
      </Title>
    </SectionTitleContainer>
  );
};

export default SectionTitle;
