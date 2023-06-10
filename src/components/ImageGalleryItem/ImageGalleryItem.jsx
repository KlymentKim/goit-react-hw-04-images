import { Component } from 'react'
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { GalleryImage } from './ImageGalleryItem.styled';

// export const GalleryIte = ({image: {webformatURL, id, largeImageURL, tags}, isOpen, onClose}) => {
//     return(
//             <>
//             <GalleryImage src={webformatURL} alt={tags} />
//             {isOpen && <Modal largeImageURL={largeImageURL} tags={tags} onClose={onClose}/>}         
//             </>
//     )
// }

// GalleryItem.propTypes = {
//   image: PropTypes.shape({
//       webformatURL: PropTypes.string.isRequired,
//     })
// };

export class GalleryItem extends Component {
    static propTypes = {
        image: PropTypes.shape({
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired
            })
    };
    
    state = {
        isModalOpen: false
    }

    toggleModal = () => this.setState(prevState =>
        ({ isModalOpen: !prevState.isModalOpen }));
    
    render() {
        const { webformatURL, tags, largeImageURL } = this.props.image;

        return (
            <div onClick={this.toggleModal}>
            <GalleryImage src={webformatURL} alt={tags} />
            {this.state.isModalOpen && <Modal largeImageURL={largeImageURL} tags={tags} onClose={this.toggleModal}/>}         
            </div>
        )
    }
}
