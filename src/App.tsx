import React, { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import ContentLayout from 'pages/MainPage';
import GameLayout from 'components/GameList/GameLayout';
import GameList from 'components/GameList/GameList';
import Other from 'components/GameList/Other';
import AuthPage from 'pages/AuthPage';
import ModalContext from 'components/modal/ModalContext';
import Modal from 'components/modal/Modal';
import ModalOverlay from 'components/modal/ModalOverlay';
import { _authPageTypes, _listNavTitles, _modalTypes } from 'constants/constants';

import './styles/_global.scss';

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
          <Route path="stores" element={<Other />} />
          {_listNavTitles.map((path, index) => (
            <Route path={path.toLowerCase()} element={<GameList />} key={`${path}_path`} />
          ))}
        </Route>
        <Route path="login" element={<AuthPage type={_authPageTypes.log} />} />
        <Route path="register" element={<AuthPage type={_authPageTypes.reg} />} />
        <Route path="games/:id" element={<GameLayout />} />
        <Route path="*" element={<p>Not found page</p>} />
      </Routes>
    </ModalContext.Provider>
  );
}

export default App;
