import './contact.scss';
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_5vl83fl',
        'template_n1gdd0o',
        form.current,
        '_9vPuVNIwteDnNRF2'
      )
      .then(
        () => {
          toast.success('Wiadomość została wysłana!');
        },
        () => {
          toast.error('Ups coś poszło nie tak ....');
        }
      );

    form.current.reset();
  };

  return (
    <div className="contact app__bg-contact" id="kontakt">
      <div className="left">
        <div className="container">
          <div className="top">
            <div className="info">
              <h2 className="title">{t('contactTitle')}</h2>

              <div className="infoContainer">
                <div className="item">
                  <p>{t('monday')}</p>
                  <span>10:00 - 17:30</span>
                </div>
                <div className="item">
                  <p>{t('tuesday')}</p>
                  <span>10:00 - 17:30</span>
                </div>
                <div className="item">
                  <p>{t('wednesday')}</p>
                  <span>10:00 - 17:30</span>
                </div>
                <div className="item">
                  <p>{t('thursday')}</p>
                  <span>10:00 - 17:30</span>
                </div>
                <div className="item">
                  <p>{t('friday')}</p>
                  <span>10:00 - 17:30</span>
                </div>
                <div className="item">
                  <p>{t('saturday')}</p>
                  <span>10:00 - 15:30</span>
                </div>
                <div className="item">
                  <p>{t('sunday')}</p>
                  <span>{t('closed')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="formContainer">
              <h2 className="title">{t('formTitle')}</h2>
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  placeholder={t('name')}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t('email')}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder={t('subject')}
                  required
                />
                <textarea
                  placeholder={t('message')}
                  name="message"
                  required
                ></textarea>
                <button type="submit" className="btn-form">
                  {t('formButton')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="info-map">
          Bar Smakuś
          <br />
          {t('infoMap')}
          <span>smakus@gmail.com</span>
        </div>
        <div className="mapContainer">
          <MapContainer center={[50.0752585, 19.9261606]} zoom={17}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[50.0752585, 19.9261606]}>
              <Popup>Bar Smakuś Zapraszamy!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
