import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ContentLayout from 'components/ContentLayout/ContentLayout';
import GameList from 'components/ContentLayout/Main/MainSection/GameList/GameList';
import Game from 'components/ContentLayout/Main/MainSection/GameList/Game';
import Other from 'components/ContentLayout/Main/MainSection/GameList/Other';

import './_global.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ContentLayout />}>
          <Route index element={<GameList />} />
          <Route path="platforms" element={<Game />} />
          <Route path="stores" element={<Other />} />
        </Route>
        <Route path="*" element={<p>Not found page</p>} />
      </Routes>
    </>
  );
}

export default App;
