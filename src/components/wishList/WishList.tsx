import React from 'react';

import styled from 'styled-components';

export const WishListContainer = styled.div``;

export const WishListCTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const WishListTable = styled.table``;

export const WishListTableThead = styled.thead``;
export const WishListTableTbody = styled.tbody``;

const WishList: React.FC = () => {
  return (
    <WishListContainer>
      <WishListCTitle>WishList</WishListCTitle>
      <WishListTableThead>
        <tr>
          <th>Game</th>
        </tr>
      </WishListTableThead>
      <WishListTableTbody>
        <tr>
          <td>Id</td>
        </tr>
      </WishListTableTbody>
    </WishListContainer>
  );
};

export default WishList;
