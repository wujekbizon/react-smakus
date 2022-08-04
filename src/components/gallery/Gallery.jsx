import './gallery.scss';
import { photos } from '../../data';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Modal from '../modal/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../redux/modalSlice';

const Gallery = () => {
  const { t } = useTranslation();
  const [tempImgSrc, setTempImgSrc] = useState('');
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const getImg = (img) => {
    dispatch(openModal());
    setTempImgSrc(img);
  };

  return (
    <>
      {isOpen && <Modal src={tempImgSrc} />}
      <div className="gallery" id="galeria">
        <div className="title">
          <h2>{t('galleryTitle')}</h2>
        </div>
        <div className="container">
          {photos.map((photo) => {
            const { id, img } = photo;

            return (
              <div
                key={id}
                className="imgContainer"
                onClick={() => getImg(img)}
              >
                <img src={img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;
