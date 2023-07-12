import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '37187693-cb92e988afefb94434f725c21';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';
const quantityPage = 12;

export const fetchPixabayApi = async (inputValue, page) => {
    const response = await axios.get(
        `?key=${API_KEY}&q=${inputValue}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}&page=
        ${page}&${quantityPage}`
    );
    return response.data;
};

// // Функция для нормализации массива изображений
// export const normalizedImages = imagesArray =>
//   imagesArray.map(({ id, tags, webformatURL, largeImageURL }) => {
//     return { id, tags, webformatURL, largeImageURL };
//   });

