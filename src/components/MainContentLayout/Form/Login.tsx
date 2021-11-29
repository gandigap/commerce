import React from 'react';

import { useAppDispatch } from 'hooks/redux-hooks';
import { userSlice } from 'store/reducers/UserSlice';

import Form from './Form';

import { useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const Login = () => {
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
  return (
    <div>
      <Form title="sign-in" handleClick={handleLogin} />
    </div>
  );
};

export default Login;
