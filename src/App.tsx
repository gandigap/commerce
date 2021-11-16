import React from 'react';
import Header from './components/ContentWrapper/Header/Header';

import './_global.scss';

function App() {
  const getData = () => {
    fetch('https://api.rawg.io/api/platforms?key=dc31c2a55aa444959f74eb7bc96b0617')
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Header />
      <div>
        Hello
        <button onClick={getData}>Get data</button>
      </div>
    </>
  );
}

export default App;
