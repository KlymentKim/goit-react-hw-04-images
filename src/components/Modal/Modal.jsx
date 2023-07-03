import { useEffect } from 'react'
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalWrap, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

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
            // Рендерим модальное окно в объект modalRoot в DOM-дереве
            modalRoot
        );

}

Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,   
}
export default Modal;
