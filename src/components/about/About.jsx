import './about.scss';

const About = () => {
  return (
    <div className="about" id="o_nas">
      <div className="infoCard">
        <h3 className="title">O NAS</h3>
        <p className="desc">
          <span className="name">Bar Smakuś</span> już od <span>2001</span> roku
          swoim klientom, serwuje tradycyjne polskie dania, przyrządzone zgodnie
          z domowymi recepturami. W menu znaleźć można bogaty wybór potraw,
          atrakcyjnych zarówno smakowo jak i cenowo.
        </p>
        <p className="desc">
          Wszystkich ceniących sobie smaczną, zdrową i nie drogą kuchnię
          zapraszamy do odwiedzenia naszego lokalu znajdującego się przy ulicy
          <span> Mazowiecka 41 w Krakowie.</span>
        </p>
        <div className="imgContainer">
          <img src="https://i.postimg.cc/Bb7m31vX/logo.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
