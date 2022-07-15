import './gallery.scss';
import { photos } from '../../data';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="gallery" id="galeria">
        <div className="title">
          <h2>{t('galleryTitle')}</h2>
        </div>
        <div className="container">
          {photos.map((photo) => {
            return (
              <div className="imgContainer" key={photo.id}>
                <img src={photo.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;
