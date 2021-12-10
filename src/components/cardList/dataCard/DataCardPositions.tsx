import React from 'react';

import { IPositions } from 'interfaces/dataInterfaces';

import styled from 'styled-components';

const DataCardPositionsContainer = styled.div`
  color: var(--color-5);
`;

type IProps = {
  positions: IPositions[];
};

const DataCardPositions: React.FC<IProps> = ({ positions }) => {
  return (
    <DataCardPositionsContainer>
      {positions.map((position: IPositions) => {
        return <p>{position.slug}</p>;
      })}
    </DataCardPositionsContainer>
  );
};

export default DataCardPositions;
