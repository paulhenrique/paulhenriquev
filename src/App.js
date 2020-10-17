import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Graphic from './components/Graphic';
import WebApps from './components/webApps';
import Footer from './components/Footer';

import './assets/style/global.css';
function App() {
  return (
    <body>
      <Navbar/>
      <Header/>
      <Graphic />
      <WebApps />
      <Footer />
    </body>
  );
}

export default App;
