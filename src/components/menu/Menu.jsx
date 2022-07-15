import './menu.scss';
import { useTranslation } from 'react-i18next';

const Menu = ({ menuOpen, setMenuOpen }) => {
  const { t } = useTranslation();
  return (
    <div className={`menu ${menuOpen ? 'active' : ''}`}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#/">{t('home')}</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href={'#o_nas'}>{t('about')}</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#menu">{t('menu')}</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#galeria">{t('gallery')}</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#kontakt">{t('contact')}</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
