import './about.scss';
import { useTranslation } from 'react-i18next';
import logo from '../../images/logo.jpg';

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
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
