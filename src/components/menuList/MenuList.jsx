import './menuList.scss';

const MenuList = ({ item, active, setSelected }) => {
  return (
    <li
      className={active ? 'menuList active' : 'menuList'}
      onClick={() => setSelected(item.id)}
    >
      {item.title}
    </li>
  );
};

export default MenuList;
