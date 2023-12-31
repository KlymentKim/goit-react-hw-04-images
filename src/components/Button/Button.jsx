import PropTypes from 'prop-types';
import { BtnLoad } from './Button.styled';

 const LoadMore = ({handleClick}) => {
    return(
        <BtnLoad type='button' onClick={handleClick}>Load More</BtnLoad>
    )
}

LoadMore.propTypes = {
    handleClick: PropTypes.func.isRequired,
}
export default LoadMore;