import Sidebar from 'components/ContentWrapper/Main/MainSection/Navigation/Sidebar';
import React from 'react';
import {
  BrowserRouter
} from "react-router-dom";

import Header from './components/ContentWrapper/Header/Header';
import Main from './components/ContentWrapper/Main/Main';

import './_global.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}



export default App;
