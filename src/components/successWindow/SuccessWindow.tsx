import ModalContext from 'components/modal/ModalContext';
import React, { useContext, useEffect, useMemo } from 'react';

import styled from 'styled-components';

const SuccessWindowContainer = styled.div`
  width: 60%;
  min-width: 300px;
  margin: 50px auto;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 10px 0px var(--color-4);
  box-shadow: 0px 0px 10px 0px var(--color-4);
`;

const SuccessWindowTitle = styled.h3`
  text-align: center;
  font-size: 32px;
  color: var(--color-success);
`;

const SuccessWindow = () => {
  const audio = useMemo(() => new Audio(require(`sounds/sound.mp3`).default), []);
  const modalContext = useContext(ModalContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      audio && audio.play();
    }, 300);

    const timer2 = setTimeout(() => modalContext.setShowModal(!modalContext.isModalOpen), 3000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [audio, modalContext]);

  return (
    <SuccessWindowContainer>
      <SuccessWindowTitle>Thank you!</SuccessWindowTitle>
    </SuccessWindowContainer>
  );
};

export default SuccessWindow;
