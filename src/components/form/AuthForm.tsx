import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import { useAppDispatch } from 'hooks/redux-hooks';
import { userSlice } from 'store/reducers/UserSlice';

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { _authPageTitles, _authPageTypes, _errorMessages } from 'constants/constants';

interface IAuthForm {
  typeForm: string;
}

const AuthForm: React.FC<IAuthForm> = ({ typeForm }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userFetchingSuccess, userFetchingError } = userSlice.actions;

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          userFetchingSuccess({ email: user.email, token: user.refreshToken, id: user.uid }),
        );
        navigate('/');
      })
      .catch((error) => {
        dispatch(userFetchingError(_errorMessages.userWrong));
      });
  };

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          userFetchingSuccess({ email: user.email, token: user.refreshToken, id: user.uid }),
        );
        navigate('/');
      })
      .catch((error) => {
        dispatch(userFetchingError(_errorMessages.emailInUse));
      });
  };

  return typeForm === _authPageTypes.log ? (
    <Form title={_authPageTitles.log} handleClick={handleLogin} />
  ) : (
    <Form title={_authPageTitles.reg} handleClick={handleRegister} />
  );
};

export default AuthForm;
