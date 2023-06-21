import { useState } from 'react'
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { GalleryImage } from './ImageGalleryItem.styled';


export const GalleryItem = ({ image: { webformatURL, id, largeImageURL, tags } }) =>  {
  const [isModalOpen, setModalStatus] = useState(false)
  


  const toggleModal = () => setModalStatus(prevState => !prevState)
  

      return (
          <div onClick={toggleModal}>
          <GalleryImage src={webformatURL} alt={tags} />
          {isModalOpen && <Modal largeImageURL={largeImageURL} tags={tags} onClose={toggleModal}/>}         
          </div>
      )
}


GalleryItem.propTypes = {
  image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired
  })
}
