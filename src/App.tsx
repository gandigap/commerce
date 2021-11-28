import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ContentLayout from 'components/MainContentLayout/MainContentLayout';
import GameLayout from 'components/MainContentLayout/GameList/GameLayout';
import GameList from 'components/MainContentLayout/GameList/GameList';
import PlatformList from 'components/MainContentLayout/GameList/PlatformList';
import Other from 'components/MainContentLayout/GameList/Other';
import LoginPage from 'components/LoginPage'
import RegisterPage from 'components/RegisterPage'

import './_global.scss';


function App() {
  return (
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
  );
}

export default App;
