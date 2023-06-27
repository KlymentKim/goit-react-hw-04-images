import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '37187693-cb92e988afefb94434f725c21';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';


export const fetchPixabayApi = async (inputValue, page = 1) => {
    const response = await axios.get(
        `?key=${KEY}&q=${inputValue}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}&page=${page}&per_page=12`
    );
    return response.data
};

