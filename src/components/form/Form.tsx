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
  display: flex;
  flex-direction: column;
  margin: 0 40px;
`;

const FormButton = styled.button`
  margin: 0 auto;
  ${buttonFormAndCard}
  text-transform:uppercase;
`;

interface IForm {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const Form: React.FC<IForm> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorAuth, setErrorAuth] = useState(false);

  const handlerChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const handlerChangePass = useCallback((e) => {
    setPass(e.target.value);
  }, []);

  const checkEmail = useCallback(() => {
    if (email) {
      email.match(/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+/)
        ? setErrorAuth(false)
        : setErrorAuth(true);
    }
  }, [email]);

  const checkPassword = useCallback(() => {
    if (pass) {
      pass.match(/^[\da-zA-Z.\-_]+$/) ? setErrorAuth(false) : setErrorAuth(true);
    }
  }, [pass]);

  const buttonHandleClick = useCallback(() => {
    handleClick(email, pass);
  }, [email, handleClick, pass]);

  return (
    <FormContainer>
      <FormInput type="email" value={email} onChange={handlerChangeEmail} placeholder="email" />
      <FormInput type="password" value={pass} onChange={handlerChangePass} placeholder="password" />
      <FormButton onClick={() => handleClick(email, pass)}>{title}</FormButton>
    </FormContainer>
  );
};

export default Form;
