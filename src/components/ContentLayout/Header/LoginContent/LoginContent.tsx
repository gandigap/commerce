import React from 'react';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

const LoginContainer = styled.div``;

const LoginContent = () => {
  return (
    <LoginContainer>
      <a href="http://">Login</a>
      <a href="http://">Sign up</a>
    </LoginContainer>
  );
};

export default LoginContent;
