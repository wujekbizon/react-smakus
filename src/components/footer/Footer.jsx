import './footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        <div className="title">
          <h2>Bar Smakuś</h2>
        </div>
        <div className="container">
          <div className="socialIcon">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/BarSmakusKrakow/"
            >
              <FacebookIcon className="icon" />
            </a>
          </div>
          <div className="socialIcon">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/grzegorz-wolfinger-b88856229/"
            >
              <LinkedInIcon className="iconLin" />
            </a>
          </div>
          <div className="socialIcon">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/home?lang=en"
            >
              <TwitterIcon className="iconTwi" />
            </a>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="contactItem">
          <LocationOnOutlinedIcon style={{ marginRight: '10px' }} />
          ul. Mazowiecka 41, 30-001 Kraków
        </div>
        <div className="contactItem">
          <PhoneOutlinedIcon style={{ marginRight: '10px' }} />
          +48 12 6341682
        </div>
        <div className="contactItem">
          <EmailOutlinedIcon style={{ marginRight: '10px' }} />
          smakus@gmail.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
