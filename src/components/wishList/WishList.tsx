import React, { useCallback, useContext } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';

import { userSlice } from 'store/reducers/UserSlice';
import {
  WishListContainer,
  WishListTitle,
  WishListTable,
  WishListTbody,
  WishListTableRow,
  WishListTableCell,
  WishListButtonDeleteGame,
  WishListResultContainer,
  WishListResultTitle,
  WishListResultButton,
} from './WishListStyleElements';
import {
  _customPrice,
  _modalTypes,
  _wishListButtonSubmitValue,
  _wishListTitles,
} from 'constants/constants';
import ModalContext from 'components/modal/ModalContext';

const WishList: React.FC = () => {
  const { wishList } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const handleDelete = useCallback(
    (slug) => () => {
      dispatch(userSlice.actions.deleteGameFromWishList(slug));
    },
    [dispatch],
  );

  const modalContext = useContext(ModalContext);
  const handleSubmit = useCallback(() => {
    dispatch(userSlice.actions.clearWishList());
    modalContext.setTypeModal(_modalTypes.successModal);
    setTimeout(() => modalContext.setShowModal(!modalContext.isModalOpen), 3000);
  }, [dispatch, modalContext]);

  const countGamesInWishList = Object.keys(wishList).length;
  return (
    <WishListContainer>
      <WishListTitle>{_wishListTitles.main}</WishListTitle>
      <WishListTable>
        <WishListTbody>
          {wishList &&
            Object.entries(wishList).map(([key, value]) => {
              return (
                <WishListTableRow key={key}>
                  <WishListTableCell>{value.name}</WishListTableCell>
                  <WishListTableCell>
                    <WishListButtonDeleteGame onClick={handleDelete(key)}>
                      ✖
                    </WishListButtonDeleteGame>
                  </WishListTableCell>
                </WishListTableRow>
              );
            })}
        </WishListTbody>
      </WishListTable>
      <WishListResultContainer>
        {countGamesInWishList ? (
          <>
            <WishListResultTitle>{`Total price is ${
              countGamesInWishList * _customPrice
            }$`}</WishListResultTitle>
            <WishListResultButton onClick={handleSubmit}>
              {_wishListButtonSubmitValue}
            </WishListResultButton>
          </>
        ) : (
          <WishListResultTitle>{_wishListTitles.empty}</WishListResultTitle>
        )}
      </WishListResultContainer>
    </WishListContainer>
  );
};

export default WishList;
