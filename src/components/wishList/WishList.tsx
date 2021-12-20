import { useAppSelector } from 'hooks/redux-hooks';
import React from 'react';

import styled from 'styled-components';

export const WishListContainer = styled.div``;

export const WishListCTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const WishListTable = styled.table``;

const WishList: React.FC = () => {
  const { wishList } = useAppSelector((state) => state.userReducer);
  return (
    <WishListContainer>
      <WishListCTitle>WishList</WishListCTitle>
      <WishListTable>
        {wishList &&
          Object.entries(wishList).map(([key, value]) => {
            return <p>{key}</p>;
          })}
      </WishListTable>
    </WishListContainer>
  );
};

export default WishList;
