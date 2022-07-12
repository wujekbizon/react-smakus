import './navbar.scss';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <>
      <div className={`navbar ${menuOpen ? 'active' : ''}`}>
        <div className="wrapper">
          <div className="left">
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
          <div className="center">
            <h1 className="title">BAR SMAKUŚ</h1>
            <span className="subtitle">JADŁODALNIA</span>
          </div>
          <div className="right">
            <LanguageOutlinedIcon className="icon" />
            <span className="language">English</span>
            <DarkModeOutlinedIcon
              className="icon orange"
              onClick={() => dispatch({ type: 'TOGGLE' })}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
