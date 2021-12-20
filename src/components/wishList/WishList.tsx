import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';

import styled from 'styled-components';
import { userSlice } from 'store/reducers/UserSlice';

export const WishListContainer = styled.div`
  margin: 50px auto;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 10px 0px var(--color-4);
  box-shadow: 0px 0px 10px 0px var(--color-4);
`;

export const WishListTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

export const WishListImage = styled.img`
  padding: 5px;
  width: 50px;
  /* height: 50px; */
  border-radius: 50%;
`;

export const WishListTable = styled.table`
  /* border: 1px solid var(--color-3); */
`;

export const WishListTableRow = styled.tr`
  border-bottom: 3px solid var(--color-1);
`;

export const WishListTableCell = styled.td`
  padding: 5px;
`;

const WishList: React.FC = () => {
  const { wishList } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const handleDelete = useCallback(
    (slug) => () => {
      dispatch(userSlice.actions.deleteGameFromWishList(slug));
    },
    [dispatch],
  );
  console.log(Object.keys(wishList));
  return (
    <WishListContainer>
      <WishListTitle>WishList</WishListTitle>
      <WishListTable>
        {wishList &&
          Object.entries(wishList).map(([key, value], index) => {
            return (
              <WishListTableRow key={key}>
                <WishListTableCell>{index + 1}</WishListTableCell>
                <WishListTableCell>{value.name}</WishListTableCell>
                <WishListTableCell>
                  <button onClick={handleDelete(key)}>✖</button>
                </WishListTableCell>
              </WishListTableRow>
            );
          })}
      </WishListTable>
      {!Object.keys(wishList).length && <h3>Wish list is empty</h3>}
    </WishListContainer>
  );
};

export default WishList;
