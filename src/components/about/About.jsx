import './about.scss';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about app__bg" id="o_nas">
      <div className="infoCard">
        <h3 className="title">{t('aboutTitle')}</h3>
        <p className="desc">
          <span className="name">Bar Smakuś </span>
          {t('descOne')}
        </p>
        <p className="desc">{t('descTwo')}</p>
        <div className="imgContainer">
          <img src="https://i.postimg.cc/Bb7m31vX/logo.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
