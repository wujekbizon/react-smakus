import './modal.scss';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/modalSlice';
import { useState } from 'react';

const Modal = ({ src }) => {
  const dispatch = useDispatch();
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <div className="modal">
      <div className={fullscreen ? 'fullscreen wrapper' : 'wrapper'}>
        <div className="iconContainer">
          {fullscreen ? (
            <FullscreenExitIcon
              className="icon"
              onClick={() => setFullscreen(false)}
            />
          ) : (
            <FullscreenIcon
              className="icon"
              onClick={() => setFullscreen(true)}
            />
          )}
          <CloseOutlinedIcon
            className="icon"
            onClick={() => dispatch(closeModal())}
          />
        </div>
        <div className="imgContainer">
          <img src={src} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
