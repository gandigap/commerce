import React, { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import ContentLayout from 'components/MainContentLayout/MainContentLayout';
import GameLayout from 'components/MainContentLayout/GameList/GameLayout';
import GameList from 'components/MainContentLayout/GameList/GameList';
import PlatformList from 'components/MainContentLayout/GameList/PlatformList';
import Other from 'components/MainContentLayout/GameList/Other';
import LoginPage from 'components/LoginPage';
import RegisterPage from 'components/RegisterPage';

import './_global.scss';
import ModalContext from 'components/modal/ModalContext';
import Modal from 'components/modal/Modal';
import ModalOverlay from 'components/modal/ModalOverlay';
import { _modalTypes } from 'constants/constants';

function App() {
  const [isModalOpen, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState('register_form');
  const valueModalContext = {
    isModalOpen,
    setShowModal,
    typeModal,
    setTypeModal,
  };

  const changeStateModal = useCallback(
    (e) => {
      e.target.id === 'modal__overlay' && setShowModal(!isModalOpen);
    },
    [isModalOpen],
  );

  const changeContentModal = useCallback(() => {
    switch (valueModalContext.typeModal) {
      case _modalTypes.updateUserInfo:
        return <p>B</p>;
      case _modalTypes.updateGameInfo:
        return <p>A</p>;
      default:
        return <p>C</p>;
    }
  }, [valueModalContext.typeModal]);

  return (
    <ModalContext.Provider value={valueModalContext}>
      <Modal isModalOpen={isModalOpen}>
        <ModalOverlay onClickHandler={changeStateModal} renderSection={changeContentModal} />
      </Modal>
      <Routes>
        <Route path="/" element={<ContentLayout />}>
          <Route index element={<GameList />} />
          <Route path="platforms" element={<PlatformList />} />
          <Route path="stores" element={<Other />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="games/:id" element={<GameLayout />} />
        <Route path="*" element={<p>Not found page</p>} />
      </Routes>
    </ModalContext.Provider>
  );
}

export default App;
