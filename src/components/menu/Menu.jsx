import './menu.scss';

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`menu ${menuOpen ? 'active' : ''}`}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#/">HOME</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#o_nas">O NAS</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#menu">MENU</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#galeria">GALERIA</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#kontakt">KONTAKT</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
