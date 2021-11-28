import React, { useCallback, useState } from 'react';

interface IForm {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const Form: React.FC<IForm> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handlerChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const handlerChangePass = useCallback((e) => {
    setPass(e.target.value);
  }, []);

  return (
    <div>
      <input type="email" value={email} onChange={handlerChangeEmail} placeholder="email" />
      <input type="password" value={pass} onChange={handlerChangePass} placeholder="password" />
      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </div>
  );
};

export default Form;
