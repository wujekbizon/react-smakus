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
import ReactCountryFlag from 'react-country-flag';

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { dispatch } = useContext(DarkModeContext);
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);

  const currentLanguageCode = cookies.get('i18next') || 'pl';

  const languages = [
    { id: 1, code: 'en', name: t('languageEN'), country_code: 'gb' },
    { id: 2, code: 'pl', name: t('languagePL'), country_code: 'pl' },
  ];

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
            <div className="language-container">
              <div className="dropdown">
                <LanguageOutlinedIcon className="icon globe" />
                <ArrowDropDownIcon
                  className="iconDrop"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              {toggle && (
                <div className="language-menu scale-up-center">
                  <ul className="languages">
                    {languages.map(({ code, name, country_code }) => (
                      <li
                        className="language-list"
                        key={country_code}
                        onClick={() => {
                          i18next.changeLanguage(code);
                          setToggle(false);
                          window.location.reload();
                        }}
                      >
                        <ReactCountryFlag
                          style={{ width: '2em', height: '2em' }}
                          countryCode={country_code}
                          svg
                          cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                          cdnSuffix="svg"
                          title={name}
                          className="flag"
                        />
                        <button
                          className="language-btn"
                          disabled={code === currentLanguageCode}
                        >
                          {name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <DarkModeOutlinedIcon
              className="icon orange"
              onClick={() => {
                dispatch({ type: 'TOGGLE' });
              }}
            />
            <LightModeIcon
              className="icon sun"
              onClick={() => {
                dispatch({ type: 'TOGGLE' });
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
