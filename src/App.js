import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Graphic from './components/Graphic';
import WebApps from './components/webApps';
import Footer from './components/Footer';
import { Link } from "react-scroll";
import { AiOutlineArrowUp } from 'react-icons/ai';

import './assets/style/global.css';
function App() {
  return (
    <body>
      <Navbar />
      <Header />
      <Graphic />
      <WebApps />
      <Footer />
      <Link spy={true}
        smooth={true}
        duration={500}
        className="topLink"
        to="header"
      >
        <AiOutlineArrowUp size="32" color="white" />
      </Link>
    </body>
  );
}

export default App;
