import './contact.scss';
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet';

const Contact = () => {
  return (
    <div className="contact" id="kontakt">
      <div className="left">
        <div className="top">
          <div className="info">
            <h2 className="title">GODZINY OTWARCIA</h2>

            <div className="infoContainer">
              <div className="item">
                <p>Poniedziałek</p>
                <span>10:00 - 17:30</span>
              </div>
              <div className="item">
                <p>Wtorek</p>
                <span>10:00 - 17:30</span>
              </div>
              <div className="item">
                <p>Środa</p>
                <span>10:00 - 17:30</span>
              </div>
              <div className="item">
                <p>Czwartek</p>
                <span>10:00 - 17:30</span>
              </div>
              <div className="item">
                <p>Piątek</p>
                <span>10:00 - 17:30</span>
              </div>
              <div className="item">
                <p>Sobota</p>
                <span>10:00 - 15:30</span>
              </div>
              <div className="item">
                <p>Niedziela i Święta</p>
                <span>Zakmnięte</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="formContainer">
            <h2 className="title">NAPISZ DO NAS</h2>
            <form>
              <input type="text" name="" placeholder="Twoje imię i nazwisko" />
              <input type="text" name="" placeholder="Twój adres e-mail" />
              <input type="text" name="" placeholder="Temat" />
              <textarea placeholder="Wiadomość"></textarea>
              <button type="submit" className="btn-form">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="info-map">
          Bar Smakuś
          <br />
          Mazowiecka 41 , 30-001 Kraków
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
