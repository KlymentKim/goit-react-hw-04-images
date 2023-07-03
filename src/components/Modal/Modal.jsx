import { useEffect } from 'react'
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalWrap, Overlay } from './Modal.styled';

const modal = document.querySelector('#modal-root');

const Modal = ({largeImageURL, tags, onClose  }) => {
  
  useEffect(() => {
    const handleOnKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    
    // Добавляем обработчик события нажатия клавиши
    window.addEventListener('keydown', handleOnKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
       // Удаляем обработчик события нажатия клавиши
      window.removeEventListener('keydown', handleOnKeyDown);
      document.body.style.overflow = 'visible';
    }
  }, [onClose]);

  const handleonBackdropClick = event => {
    event.stopPropagation();
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

        return createPortal(
            <Overlay onClick={handleonBackdropClick}>
                <ModalWrap>
                    <img src={largeImageURL} alt={tags} />
                </ModalWrap>
            </Overlay>,
            modal
        );

}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
}

export default Modal;
