import './slider.scss';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { sliderItems } from '../../data';
import { useState, useEffect } from 'react';
import Advertisement from '../advertisement/Advertisement';

const Slider = () => {
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
  }, [slideIndex]);

  return (
    <>
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
      <Advertisement
        title="Przyjmujemy zamówienia:"
        text={['12 634 16 82', 'smakus.gmail.com']}
      />
    </>
  );
};

export default Slider;
