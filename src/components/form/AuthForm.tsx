import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import { useAppDispatch } from 'hooks/redux-hooks';
import { userSlice } from 'store/reducers/UserSlice';

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { _authPageTypes } from 'constants/constants';

interface IAuthForm {
  typeForm: string;
}

const AuthForm: React.FC<IAuthForm> = ({ typeForm }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setUser } = userSlice.actions;

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({ email: user.email, token: user.refreshToken, id: user.uid }));
        navigate('/');
      })
      .catch(console.error);
  };

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    console.log(auth, 'auth');
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({ email: user.email, token: user.refreshToken, id: user.uid }));
        navigate('/');
      })
      .catch(console.error);
  };

  return typeForm === _authPageTypes.login ? (
    <Form title="sign in" handleClick={handleLogin} />
  ) : (
    <Form title="register" handleClick={handleRegister} />
  );
};

export default AuthForm;
