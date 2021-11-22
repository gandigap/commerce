import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ContentLayout from 'components/MainContentLayout/MainContentLayout';
import GameList from 'components/MainContentLayout/GameList/GameList';
import PlatformList from 'components/MainContentLayout/GameList/PlatformList';
import Other from 'components/MainContentLayout/GameList/Other';

import './_global.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContentLayout />}>
        <Route index element={<GameList />} />
        <Route path="platforms" element={<PlatformList />} />
        <Route path="stores" element={<Other />} />
      </Route>
      <Route path="*" element={<p>Not found page</p>} />
    </Routes>
  );
}

export default App;
