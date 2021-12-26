import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

import Form from './Form';
import { useAppDispatch } from 'hooks/redux-hooks';
import { userSlice } from 'store/reducers/UserSlice';

import { _authPageTitles, _authPageTypes, _errorMessages } from 'constants/constants';

const setLocaleStorage = (userInfo: any) => {
  localStorage.setItem('user', JSON.stringify(userInfo));
};

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
        const data = { email: user.email, token: user.refreshToken, id: user.uid };
        dispatch(userFetchingSuccess(data));
        setLocaleStorage(data);
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
        const data = { email: user.email, token: user.refreshToken, id: user.uid };
        dispatch(userFetchingSuccess(data));
        setLocaleStorage(data);
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
