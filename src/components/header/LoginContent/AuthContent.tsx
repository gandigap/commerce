import React, { useCallback, useContext } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { userSlice } from 'store/reducers/UserSlice';
import { _modalTypes } from 'constants/constants';
import ModalContext from 'components/modal/ModalContext';

import { faShoppingCart, faDoorClosed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

const EmailInfo = styled.p`
  font-style: italic;
`;

const Button = styled.button`
  font-size: 18px;
  padding: 5px;
  border: none;
  cursor: pointer;
  color: var(--color-5);
  background-color: transparent;

  &:hover {
    color: var(--color-info);
  }
`;

const clearLocaleStorage = () => {
  localStorage.removeItem('user');
};

const AuthContent = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userReducer);
  const { removeUser } = userSlice.actions;

  const logoutHandleClick = useCallback(() => {
    dispatch(removeUser());
    clearLocaleStorage();
  }, [dispatch, removeUser]);

  const modalContext = useContext(ModalContext);
  const openWishList = useCallback(() => {
    modalContext.setTypeModal(_modalTypes.wishListModal);
    modalContext.setShowModal(!modalContext.isModalOpen);
  }, [modalContext]);

  return (
    <>
      <EmailInfo>{user.email}</EmailInfo>
      <Button onClick={logoutHandleClick}>
        <FontAwesomeIcon icon={faDoorClosed} />
      </Button>
      <Button onClick={openWishList}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </Button>
    </>
  );
};

export default AuthContent;
