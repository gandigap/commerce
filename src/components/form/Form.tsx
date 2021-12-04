import React, { useCallback, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { userSlice } from 'store/reducers/UserSlice';

import { _errorMessages } from 'constants/constants';

import styled from 'styled-components';
import { buttonFormAndCard } from 'styles/mixins';

const FormInput = styled.input`
  margin: 5px 30px;
  border: none;
  padding: 5px;
  background-size: 14px;
  background-color: var(--color-1);
`;

const FormContainer = styled.div`
  margin: 0 auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const FormButton = styled.button`
  margin: 0 auto;
  ${buttonFormAndCard}
  text-transform:uppercase;
`;

const FormError = styled.div`
  margin: 5px;
  height: 20px;
  font-weight: bold;
  color: var(--color-danger);
`;

interface IForm {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const Form: React.FC<IForm> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const dispatch = useAppDispatch();
  const { userFetchingError } = userSlice.actions;
  const { error } = useAppSelector((state) => state.userReducer);

  const changeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const changePass = useCallback((e) => {
    setPass(e.target.value);
  }, []);

  const checkEmail = useCallback(() => {
    return !!(email && email.match(/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+/));
  }, [email]);

  const checkPassword = useCallback(() => {
    return !!(pass && pass.match(/^[\da-zA-Z ]{6,10}$/));
  }, [pass]);

  const clearError = useCallback(() => {
    dispatch(userFetchingError(''));
  }, [dispatch, userFetchingError]);

  const buttonAuthHandleClick = useCallback(() => {
    if (checkEmail() && checkPassword()) {
      dispatch(userFetchingError(''));
      handleClick(email, pass);
    } else {
      dispatch(userFetchingError(_errorMessages.inputValueNotCorrect));
    }
  }, [checkEmail, checkPassword, dispatch, email, handleClick, pass, userFetchingError]);

  return (
    <FormContainer>
      <FormInput
        type="email"
        value={email}
        onChange={changeEmail}
        placeholder="email"
        onFocus={clearError}
      />
      <FormInput
        type="password"
        value={pass}
        onChange={changePass}
        placeholder="password"
        onFocus={clearError}
      />
      {error.length !== 0 && <FormError>{error}</FormError>}
      <FormButton onClick={buttonAuthHandleClick}>{title}</FormButton>
    </FormContainer>
  );
};

export default Form;
