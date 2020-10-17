import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Graphic from './components/Graphic';

import './assets/style/global.css';
function App() {
  return (
    <body>
      <Navbar/>
      <Header/>
      <Graphic />
    </body>
  );
}

export default App;
