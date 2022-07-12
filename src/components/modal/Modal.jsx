import './modal.scss';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/modalSlice';

const Modal = ({ src }) => {
  const dispatch = useDispatch();

  return (
    <div className="modal">
      <div className="wrapper">
        <div className="iconContainer">
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
