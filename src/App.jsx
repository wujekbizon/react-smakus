import './style/dark.scss';
import './app.scss';

import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Slider from './components/slider/Slider';
import About from './components/about/About';
import List from './components/list/List';
import Contact from './components/contact/Contact';
import Advertisement from './components/advertisement/Advertisement';
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Slider />
      <About />
      <Advertisement
        showMobile="phone"
        title="Dziś Polecamy:"
        text={[
          'Sandacz z Frytkami i Surówki - 28.8zł',
          'Barszcz Ukraiński - 10zł',
          'Bryzol z pieczarkami + Ziemniaki - 31.9zł',
        ]}
      />
      <List />
      <Advertisement
        showDesktop="desktop"
        title="Dziś Polecamy:"
        text={[
          'Sandacz z Frytkami i Surówki - 28.8zł',
          'Barszcz Ukraiński - 10zł',
          'Bryzol z pieczarkami + Ziemniaki - 31.9zł',
        ]}
      />
      <Gallery />
      <Contact />
      <Footer />

      <ToastContainer
        position="top-center"
        transition={Zoom}
        draggablePercent={60}
      />
    </div>
  );
};

export default App;
