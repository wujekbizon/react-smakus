import './slider.scss';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { useState, useEffect } from 'react';
import Advertisement from '../advertisement/Advertisement';
import { useTranslation } from 'react-i18next';
import bar from '../../images/bar.jpg';
import plac3a from '../../images/plac3a.jpg';
import ciasto from '../../images/ciasto.jpg';
import bar3 from '../../images/bar3.jpg';

const Slider = () => {
  const { t } = useTranslation();
  const sliderItems = [
    {
      id: 1,
      img: bar,
      title: t('titleFirst'),
      desc: t('descFirst'),
    },
    {
      id: 2,
      img: plac3a,
      title: t('titleSecond'),
      desc: t('descSecond'),
    },
    {
      id: 3,
      img: ciasto,
      title: t('titleThird'),
      desc: t('descThird'),
    },
    {
      id: 4,
      img: bar3,
      title: t('titleFourth'),
      desc: t('descFourth'),
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > sliderItems.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const prevSlide = () => {
    setSlideIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = sliderItems.length - 1;
      }
      return index;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setSlideIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > sliderItems.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 8000);

    return () => clearInterval(slider);
  }, [slideIndex, sliderItems.length]);

  return (
    <div className="slider-wrapper">
      <div className="slider" id="/">
        <div className="arrowLeft" onClick={prevSlide}>
          <ArrowBackIosOutlinedIcon className="icon" />
        </div>
        <div className="arrowRight" onClick={nextSlide}>
          <ArrowForwardIosOutlinedIcon className="icon" />
        </div>
        <div className="container">
          {sliderItems.map((item, index) => {
            const { id, img, title, desc } = item;
            let position = 'nextSlide';

            if (index === slideIndex) {
              position = 'activeSlide';
            }

            if (
              index === slideIndex - 1 ||
              (index === 0 && index === sliderItems.length - 1)
            ) {
              position = 'lastSlide';
            }

            return (
              <div className={`slide ${position}`} key={id}>
                <div className="imgContainer">
                  <img src={img} alt={title} className="image" />
                </div>
                <div className="info">
                  <h1 className="title">{title}</h1>
                  <p className="desc">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Advertisement
          title={t('adSlider')}
          text={['12 634 16 82', 'smakus.gmail.com']}
        />
      </div>
    </div>
  );
};

export default Slider;
