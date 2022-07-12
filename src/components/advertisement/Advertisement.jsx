import './advertisement.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

const Advertisement = ({ title, text, showMobile, showDesktop }) => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: text,
      backDelay: 1800,
      backSpeed: 60,
    });
  }, []);
  return (
    <div className={`${showDesktop} ${showMobile} addContainer`}>
      <h3 className="title">
        {title} <span ref={textRef}></span>
      </h3>
    </div>
  );
};

export default Advertisement;
