import React from 'react';

import { IGeneralInfo } from 'interfaces/dataInterfaces';

import styled from 'styled-components';

const DataCardPositionsContainer = styled.div`
  height: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  color: var(--color-5);
`;

const DataCardPosition = styled.div`
  font-size: 12px;
`;

type IProps = {
  positions: IGeneralInfo[];
};

const DataCardPositions: React.FC<IProps> = ({ positions }) => {
  return (
    <DataCardPositionsContainer>
      {positions.map((position: IGeneralInfo, index: number) => {
        return (
          <DataCardPosition>
            {`${position.slug} ${index !== positions.length - 1 ? ' / ' : ' '}`}&nbsp;
          </DataCardPosition>
        );
      })}
    </DataCardPositionsContainer>
  );
};

export default DataCardPositions;
