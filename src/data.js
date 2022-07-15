import { useTranslation } from 'react-i18next';

export const Categories = () => {
  const { t } = useTranslation();
  const menu = [
    {
      id: 'breakfast',
      title: t('brekfast'),
    },
    {
      id: 'soups',
      title: t('soups'),
    },
    {
      id: 'bar',
      title: t('bar'),
    },
    {
      id: 'main',
      title: t('main'),
    },
    {
      id: 'fish',
      title: t('fish'),
    },
    {
      id: 'dumplings',
      title: t('dumplings'),
    },
    {
      id: 'extras',
      title: t('extras'),
    },
    {
      id: 'drinks',
      title: t('drinks'),
    },
  ];

  return menu;
};

export const Breakfast = () => {
  const { t } = useTranslation();
  const breakfast = [
    {
      id: 1,
      name: t('breakfast1'),
      price: 8.5,
    },
    {
      id: 2,
      name: t('breakfast2'),
      price: 7.5,
    },
    {
      id: 3,
      name: t('breakfast3'),
      price: 2.5,
    },
    {
      id: 4,
      name: t('breakfast4'),
      price: 4,
    },
    {
      id: 5,
      name: t('breakfast5'),
      price: 5,
    },
    {
      id: 6,
      name: t('breakfast6'),
      price: 5,
    },
    {
      id: 7,
      name: t('breakfast7'),
      price: 4.5,
    },
    {
      id: 8,
      name: t('breakfast8'),
      price: 10.8,
    },
    {
      id: 9,
      name: t('breakfast9'),
      price: 2,
    },
    {
      id: 10,
      name: t('breakfast10'),
      price: 3,
    },
  ];

  return breakfast;
};

export const Soups = () => {
  const { t } = useTranslation();
  const soups = [
    {
      id: 1,
      name: t('soup1'),
      price: 8,
    },
    {
      id: 2,
      name: t('soup2'),
      price: 8,
    },
    {
      id: 3,
      name: t('soup3'),
      price: 8,
    },
    {
      id: 4,
      name: t('soup4'),
      price: 9,
    },
    {
      id: 5,
      name: t('soup5'),
      price: 8,
    },
    {
      id: 6,
      name: t('soup6'),
      price: 15.8,
    },
    {
      id: 7,
      name: t('soup7'),
      price: 16,
    },
    {
      id: 8,
      name: t('soup8'),
      price: 8,
    },
    {
      id: 9,
      name: t('soup9'),
      price: 8,
    },
    {
      id: 10,
      name: t('soup10'),
      price: 8,
    },
  ];
  return soups;
};

export const Bar = () => {
  const { t } = useTranslation();
  const bar = [
    {
      id: 1,
      name: t('bar1'),
      price: 17.5,
    },
    {
      id: 2,
      name: t('bar2'),
      price: 17.5,
    },
    {
      id: 3,
      name: t('bar3'),
      price: 25.8,
    },
    {
      id: 4,
      name: t('bar4'),
      price: 19.8,
    },
    {
      id: 5,
      name: t('bar5'),
      price: 27.8,
    },
    {
      id: 6,
      name: t('bar6'),
      price: 18.8,
    },
    {
      id: 7,
      name: t('bar7'),
      price: 13.5,
    },
    {
      id: 8,
      name: t('bar8'),
      price: 21.8,
    },
    {
      id: 9,
      name: t('bar9'),
      price: 15.8,
    },
    {
      id: 10,
      name: t('bar10'),
      price: 18.6,
    },
  ];
  return bar;
};

export const main = [
  {
    id: 1,
    name: 'Kotlet z Kurczaka + Ziem/Sur',
    price: 26.8,
  },
  {
    id: 2,
    name: 'Udko Pieczone/Gotowane + Ziem/Sur',
    price: 20.8,
  },
  {
    id: 3,
    name: 'Kotlet De Volaille + Ziem/Sur',
    price: 29.9,
  },
  {
    id: 4,
    name: 'Filet z Indyka w Sosie + Ziem/Sur',
    price: 27.9,
  },
  {
    id: 5,
    name: 'Kotlet Schabowy + Ziem/Sur',
    price: 26.8,
  },
  {
    id: 6,
    name: 'Żeberka Duszone + Ziem/Sur',
    price: 26.8,
  },
  {
    id: 7,
    name: 'Stek Wiepzowy + Ziem/Sur',
    price: 26.8,
  },
  {
    id: 8,
    name: 'Mielony Domowy + Ziem/Sur',
    price: 28.8,
  },
  {
    id: 9,
    name: 'Gulasz Wieprzowy + Ziem/Sur',
    price: 26.9,
  },
  {
    id: 10,
    name: 'Pulpety w Sosie + Ziem/Sur',
    price: 28.8,
  },
];

export const fish = [
  {
    id: 1,
    name: 'Sandacz + Ziem/Sur ',
    price: 28.8,
  },
  {
    id: 2,
    name: 'Pstrąg + Ziem/Sur',
    price: 28.8,
  },
  {
    id: 3,
    name: 'Halibut + Ziem/Sur',
    price: 28.9,
  },
  {
    id: 4,
    name: 'Karp + Ziem/Sur',
    price: 25.8,
  },
  {
    id: 5,
    name: 'Sola Gotowana w Jarzynach',
    price: 28.8,
  },
  {
    id: 6,
    name: 'Filet z Dorsza + Ziem/Sur',
    price: 28.9,
  },
  {
    id: 7,
    name: 'Łosoś + Ziem/Sur',
    price: 28.9,
  },
  {
    id: 8,
    name: 'Morszczuk + Ziem/Sur',
    price: 26.8,
  },
];

export const dumplings = [
  {
    id: 1,
    name: 'Pierogi z Mięsem',
    price: 26,
  },
  {
    id: 2,
    name: 'Pierogi Ruskie',
    price: 18,
  },
  {
    id: 3,
    name: 'Pierogi z Borówkami',
    price: 24,
  },
  {
    id: 4,
    name: 'Pierogi z Kapusta i Grzybami ',
    price: 19,
  },
  {
    id: 5,
    name: 'Nalesniki z Serem',
    price: 16.8,
  },
  {
    id: 6,
    name: 'Omlet z Dżemem',
    price: 10.8,
  },
  {
    id: 7,
    name: 'Frytki z Ketchupem',
    price: 8.8,
  },
  {
    id: 8,
    name: 'Kasza Gryczna',
    price: 5,
  },
  {
    id: 9,
    name: 'Kefir',
    price: 3.5,
  },
];

export const extras = [
  {
    id: 1,
    name: 'Ziemniaki',
    price: 5,
  },
  {
    id: 2,
    name: 'Kapusta Zasmażana',
    price: 7.5,
  },
  {
    id: 3,
    name: 'Buraczki Zasmażane',
    price: 7.5,
  },
  {
    id: 4,
    name: 'Marchewka z Groszkiem',
    price: 7.5,
  },
  {
    id: 5,
    name: 'Surówka z Marchwi',
    price: 7,
  },
  {
    id: 6,
    name: 'Surówka z Czerwonej Kapusty',
    price: 7,
  },
  {
    id: 7,
    name: 'Surówka z Białej Kapusty',
    price: 7,
  },
  {
    id: 8,
    name: 'Zestaw Surówek',
    price: 8,
  },
  {
    id: 9,
    name: 'Mizeria',
    price: 9,
  },
  {
    id: 10,
    name: 'Młoda Kapusta',
    price: 7.5,
  },
];

export const drinks = [
  {
    id: 1,
    name: 'Kawa Parzona',
    price: 7,
  },
  {
    id: 2,
    name: 'Kawa Rozpuszczalna',
    price: 7,
  },
  {
    id: 3,
    name: 'Herbata',
    price: 3,
  },
  {
    id: 4,
    name: 'Napój Tymbark',
    price: 5,
  },
  {
    id: 5,
    name: 'Coca-Cola',
    price: 6,
  },
  {
    id: 6,
    name: 'Kompot Owocowy',
    price: 3,
  },
  {
    id: 7,
    name: 'Sok Jabłkowy',
    price: 5,
  },
  {
    id: 8,
    name: 'Sok Porzeczkowy',
    price: 6,
  },
  {
    id: 9,
    name: 'Woda Mineralna',
    price: 5,
  },
  {
    id: 10,
    name: 'Woda',
    price: 4,
  },
];

export const photos = [
  {
    id: 1,
    img: 'https://i.postimg.cc/Y256nMS2/bn.jpg',
  },

  {
    id: 2,
    img: 'https://i.postimg.cc/KzxK3CKr/291349088-444248023898585-8397337012357147602-n.jpg',
  },

  {
    id: 3,
    img: 'https://i.postimg.cc/BvWpkZyS/bar2.jpg',
  },

  {
    id: 4,
    img: 'https://i.postimg.cc/rF3NRFq1/cennik.jpg',
  },

  {
    id: 5,
    img: 'https://i.postimg.cc/k5cSsnPh/food2.jpg',
  },

  {
    id: 6,
    img: 'https://i.postimg.cc/k4G2yKcB/food1.jpg',
  },

  {
    id: 7,
    img: 'https://i.postimg.cc/9QWVHV7h/abc.jpg',
  },

  {
    id: 8,
    img: 'https://i.postimg.cc/HLRfnCVj/bar1-n.jpg',
  },

  {
    id: 9,
    img: 'https://i.postimg.cc/B62wvLrw/bar4.jpg',
  },
  {
    id: 10,
    img: 'https://i.postimg.cc/XJ8vwKXy/logo.jpg',
  },
];
