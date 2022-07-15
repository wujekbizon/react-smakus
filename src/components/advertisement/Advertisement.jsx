import './advertisement.scss';
import { init } from 'ityped';
import { useEffect, useRef, useState } from 'react';

const Advertisement = ({ title, text, showMobile, showDesktop }) => {
  const textRef = useRef();
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    init(textRef.current, {
      cursorChar: '_',
      showCursor: true,
      strings: debouncedText,
      backDelay: 1800,
      backSpeed: 50,
    });
  }, [debouncedText]);

  return (
    <div className={`${showDesktop} ${showMobile} addContainer`}>
      <h3 className="title">
        {title} <span ref={textRef}></span>
      </h3>
    </div>
  );
};

export default Advertisement;
