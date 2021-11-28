import React, { useCallback } from 'react';
import { useAppDispatch } from 'hooks/redux-hooks';
import { userSlice } from 'store/reducers/UserSlice';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

const AuthContentContainer = styled.div``;

const AuthContent = () => {
  const dispatch = useAppDispatch();
  const { removeUser } = userSlice.actions;

  const logoutHandleClick = useCallback(() => {
    dispatch(removeUser());
  }, [dispatch, removeUser]);
  return (
    <AuthContentContainer>
      AuthContent
      <button onClick={logoutHandleClick}>LogOut</button>
    </AuthContentContainer>
  );
};

export default AuthContent;
