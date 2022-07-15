import './navbar.scss';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext, useState } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';

const languages = [
  {
    code: 'en',
    name: 'EN',
    country_code: 'gb',
  },
  {
    code: 'pl',
    name: 'PL',
    country_code: 'pl',
  },
];

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { dispatch } = useContext(DarkModeContext);
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const currentLanguageCode = cookies.get('i18next') || 'pl';

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
            <span className="subtitle">{t('navSubtitle')}</span>
          </div>
          <div className="right">
            <div className="langContainer">
              <div className="dropdown">
                <LanguageOutlinedIcon className="icon globe" />
                <ArrowDropDownIcon
                  className="iconDrop"
                  onClick={() => setToggle(!toggle)}
                />
              </div>

              <ul className={toggle ? 'languages active' : 'languages'}>
                {languages.map(({ code, name, country_code }) => (
                  <li
                    key={country_code}
                    className="language"
                    onClick={() => {
                      i18next.changeLanguage(code);
                      setToggle(false);
                    }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            <DarkModeOutlinedIcon
              className="icon orange"
              onClick={() => dispatch({ type: 'TOGGLE' })}
            />
            <LightModeIcon
              className="icon sun"
              onClick={() => dispatch({ type: 'TOGGLE' })}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
