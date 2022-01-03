import React, { useCallback, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import ContentLayout from 'pages/MainPage';
import GameList from 'components/cardList/GameList';
import Game from 'components/cardList/game/Game';
import AuthPage from 'pages/AuthPage';
import ModalContext from 'components/modal/ModalContext';
import Modal from 'components/modal/Modal';
import ModalOverlay from 'components/modal/ModalOverlay';
import { _authPageTypes, _listNavTitles, _modalTypes, _listAsideTitles } from 'constants/constants';

import './styles/_global.scss';
import { useAppDispatch } from 'hooks/redux-hooks';
import { userSlice } from 'store/reducers/UserSlice';
import DataList from 'components/cardList/DataList';
import WishList from 'components/wishList/WishList';
import SuccessWindow from 'components/successWindow/SuccessWindow';

function App() {
  const [isModalOpen, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState('register_form');
  const dispatch = useAppDispatch();
  const { userFetchingSuccess } = userSlice.actions;

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

  useEffect(() => {
    const user = localStorage.getItem('user');
    user && dispatch(userFetchingSuccess(JSON.parse(user)));
  }, [dispatch, userFetchingSuccess]);

  const changeContentModal = useCallback(() => {
    switch (valueModalContext.typeModal) {
      case _modalTypes.wishListModal:
        return <WishList />;
      case _modalTypes.successModal:
        return <SuccessWindow />;
      default:
        return <WishList />;
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
          <Route path="games/:slug" element={<Game />} />
          {Object.values(_listNavTitles).map((path, index) => (
            <Route path={path.toLowerCase()} element={<DataList />} key={`${path}_path`} />
          ))}
          {Object.values({ ..._listNavTitles, ..._listAsideTitles }).map((path, index) => (
            <Route
              path={`${path.toLowerCase()}/:slug`}
              element={<GameList />}
              key={`${path}_path_slug`}
            />
          ))}
          <Route path={`genres/:slug`} element={<GameList />} />
        </Route>
        <Route path="login" element={<AuthPage type={_authPageTypes.log} />} />
        <Route path="register" element={<AuthPage type={_authPageTypes.reg} />} />
        <Route path="*" element={<p>Not found page</p>} />
      </Routes>
    </ModalContext.Provider>
  );
}

export default App;
