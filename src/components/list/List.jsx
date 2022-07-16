import './list.scss';
import MenuList from '../menuList/MenuList';
import {
  Categories,
  Breakfast,
  Soups,
  Bar,
  Main,
  Fish,
  Dumplings,
  Extras,
  Drinks,
} from '../../data';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const List = () => {
  const [selected, setSelected] = useState('breakfast');
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  const menu = Categories();
  const breakfast = Breakfast();
  const soups = Soups();
  const bar = Bar();
  const main = Main();
  const fish = Fish();
  const dumplings = Dumplings();
  const extras = Extras();
  const drinks = Drinks();

  useEffect(() => {
    switch (selected) {
      case 'breakfast':
        setData(breakfast);
        break;
      case 'soups':
        setData(soups);
        break;
      case 'bar':
        setData(bar);
        break;
      case 'main':
        setData(main);
        break;
      case 'fish':
        setData(fish);
        break;
      case 'dumplings':
        setData(dumplings);
        break;
      case 'extras':
        setData(extras);
        break;
      case 'drinks':
        setData(drinks);
        break;
      default:
        setData(breakfast);
    }
  }, [selected]);

  const renderList = data.map((d) => (
    <div className="item" key={d.id}>
      <h3>{d.name}</h3>
      <span>{d.price} zł</span>
    </div>
  ));

  return (
    <div className="list" id="menu">
      <h1 className="title">MENU</h1>
      <ul>
        {menu.map((item) => (
          <MenuList
            item={item}
            key={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">{renderList}</div>
      <div className="legend">
        🥔 - {t('legend1')} 150g 🥗 - {t('legend2')} 150g
      </div>
    </div>
  );
};

export default List;
