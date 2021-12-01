import { _errorMessages } from 'constants/constants';
import { useAppSelector } from 'hooks/redux-hooks';
import React, { useCallback, useState } from 'react';

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
  const [errorAuth, setErrorAuth] = useState(false);
  const { error } = useAppSelector((state) => state.userReducer);

  const handlerChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
    setErrorAuth(false);
  }, []);
  const handlerChangePass = useCallback((e) => {
    setPass(e.target.value);
    setErrorAuth(false);
  }, []);

  const checkEmail = useCallback(() => {
    return !!(email && email.match(/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+/));
  }, [email]);

  const checkPassword = useCallback(() => {
    return !!(pass && pass.match(/^[\da-zA-Z ]{6,10}$/));
  }, [pass]);

  const buttonAuthHandleClick = useCallback(() => {
    if (checkEmail() && checkPassword()) {
      setErrorAuth(false);
      handleClick(email, pass);
    } else {
      setErrorAuth(true);
    }
  }, [checkEmail, checkPassword, email, handleClick, pass]);

  return (
    <FormContainer>
      <FormInput type="email" value={email} onChange={handlerChangeEmail} placeholder="email" />
      <FormInput type="password" value={pass} onChange={handlerChangePass} placeholder="password" />
      {errorAuth && <FormError>{_errorMessages.inputValueNotCorrect}</FormError>}
      {error.length !== 0 && <FormError>{error}</FormError>}
      <FormButton onClick={buttonAuthHandleClick}>{title}</FormButton>
    </FormContainer>
  );
};

export default Form;
