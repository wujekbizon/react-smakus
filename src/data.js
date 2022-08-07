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

export const Main = () => {
  const { t } = useTranslation();
  const main = [
    {
      id: 1,
      name: t('main1'),
      price: 26.8,
    },
    {
      id: 2,
      name: t('main2'),
      price: 20.8,
    },
    {
      id: 3,
      name: t('main3'),
      price: 29.9,
    },
    {
      id: 4,
      name: t('main4'),
      price: 27.9,
    },
    {
      id: 5,
      name: t('main5'),
      price: 26.8,
    },
    {
      id: 6,
      name: t('main6'),
      price: 26.8,
    },
    {
      id: 7,
      name: t('main7'),
      price: 26.8,
    },
    {
      id: 8,
      name: t('main8'),
      price: 28.8,
    },
    {
      id: 9,
      name: t('main9'),
      price: 26.9,
    },
    {
      id: 10,
      name: t('main10'),
      price: 28.8,
    },
  ];
  return main;
};

export const Fish = () => {
  const { t } = useTranslation();
  const fish = [
    {
      id: 1,
      name: t('fish1'),
      price: 28.8,
    },
    {
      id: 2,
      name: t('fish2'),
      price: 28.8,
    },
    {
      id: 3,
      name: t('fish3'),
      price: 28.9,
    },
    {
      id: 4,
      name: t('fish4'),
      price: 25.8,
    },
    {
      id: 5,
      name: t('fish5'),
      price: 28.8,
    },
    {
      id: 6,
      name: t('fish6'),
      price: 28.9,
    },
    {
      id: 7,
      name: t('fish7'),
      price: 28.9,
    },
    {
      id: 8,
      name: t('fish8'),
      price: 26.8,
    },
  ];
  return fish;
};

export const Dumplings = () => {
  const { t } = useTranslation();
  const dumplings = [
    {
      id: 1,
      name: t('dumplings1'),
      price: 26,
    },
    {
      id: 2,
      name: t('dumplings2'),
      price: 18,
    },
    {
      id: 3,
      name: t('dumplings3'),
      price: 24,
    },
    {
      id: 4,
      name: t('dumplings4'),
      price: 19,
    },
    {
      id: 5,
      name: t('dumplings5'),
      price: 16.8,
    },
    {
      id: 6,
      name: t('dumplings6'),
      price: 10.8,
    },
    {
      id: 7,
      name: t('dumplings7'),
      price: 8.8,
    },
    {
      id: 8,
      name: t('dumplings8'),
      price: 5,
    },
    {
      id: 9,
      name: t('dumplings9'),
      price: 3.5,
    },
  ];
  return dumplings;
};

export const Extras = () => {
  const { t } = useTranslation();

  const extras = [
    {
      id: 1,
      name: t('extras1'),
      price: 5,
    },
    {
      id: 2,
      name: t('extras2'),
      price: 7.5,
    },
    {
      id: 3,
      name: t('extras3'),
      price: 7.5,
    },
    {
      id: 4,
      name: t('extras4'),
      price: 7.5,
    },
    {
      id: 5,
      name: t('extras5'),
      price: 7,
    },
    {
      id: 6,
      name: t('extras6'),
      price: 7,
    },
    {
      id: 7,
      name: t('extras7'),
      price: 7,
    },
    {
      id: 8,
      name: t('extras8'),
      price: 8,
    },
    {
      id: 9,
      name: t('extras9'),
      price: 9,
    },
    {
      id: 10,
      name: t('extras10'),
      price: 7.5,
    },
  ];
  return extras;
};

export const Drinks = () => {
  const { t } = useTranslation();
  const drinks = [
    {
      id: 1,
      name: t('drinks1'),
      price: 7,
    },
    {
      id: 2,
      name: t('drinks2'),
      price: 7,
    },
    {
      id: 3,
      name: t('drinks3'),
      price: 3,
    },
    {
      id: 4,
      name: t('drinks4'),
      price: 5,
    },
    {
      id: 5,
      name: t('drinks5'),
      price: 6,
    },
    {
      id: 6,
      name: t('drinks6'),
      price: 3,
    },
    {
      id: 7,
      name: t('drinks7'),
      price: 5,
    },
    {
      id: 8,
      name: t('drinks8'),
      price: 6,
    },
    {
      id: 9,
      name: t('drinks9'),
      price: 5,
    },
    {
      id: 10,
      name: t('drinks10'),
      price: 4,
    },
  ];
  return drinks;
};

export const photos = [
  {
    id: 1,
    img: 'https://i.postimg.cc/QtFbpZ4H/bn.jpg',
  },

  {
    id: 2,
    img: 'https://i.postimg.cc/9QWVHV7h/abc.jpg',
  },

  {
    id: 3,
    img: 'https://i.postimg.cc/bYFjDXfQ/pierogi2.jpg',
  },

  {
    id: 4,
    img: 'https://i.postimg.cc/FzG5GqYQ/pierogi1.jpg',
  },

  {
    id: 5,
    img: 'https://i.postimg.cc/k5cSsnPh/food2.jpg',
  },

  {
    id: 6,
    img: 'https://i.postimg.cc/wxsdmfqZ/pierogi3.jpg',
  },

  {
    id: 7,
    img: 'https://i.postimg.cc/RVyM9pV1/food.jpg',
  },

  {
    id: 8,
    img: 'https://i.postimg.cc/HLRfnCVj/bar1-n.jpg',
  },

  {
    id: 9,
    img: 'https://i.postimg.cc/BvWpkZyS/bar2.jpg',
  },
  {
    id: 10,
    img: 'https://i.postimg.cc/rF3NRFq1/cennik.jpg',
  },
];
