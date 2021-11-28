import React from 'react';

import { useAppDispatch } from 'hooks/redux-hooks';
import { userSlice } from 'store/reducers/UserSlice';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import Form from './Form';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setUser } = userSlice.actions;

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
  return (
    <div>
      <Form title="register" handleClick={handleRegister} />
    </div>
  );
};

export default SignUp;
