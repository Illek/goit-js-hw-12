import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import createMarkup from './render-functions';

const API_KEY = '44303353-9b630a8fdc8cdbe3ae770ff69';
const BASE_URL = 'https://pixabay.com/api/';
const loader = document.querySelector('.loader');
const listOfImages = document.querySelector('#images');

export default function fetchImages(searchValue) {
  resetImageList();
  showLoader();

  const url = constructURL(searchValue);

  fetch(url)
    .then(handleResponse)
    .then(data => handleData(data))
    .catch(handleError)
    .finally(hideLoader);
}

function resetImageList() {
  listOfImages.innerHTML = '';
}

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function constructURL(searchValue) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return `${BASE_URL}?${searchParams}`;
}

function handleResponse(response) {
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
}

function handleData(data) {
  if (data.total === 0) {
    showNoResultsMessage();
    return;
  }
  createMarkup(data);
}

function showNoResultsMessage() {
  iziToast.show({
    class: 'search-404',
    message:
      'Sorry, there are no images matching your search query. Please, try again!',
    position: 'topRight',
    iconUrl: icon,
    backgroundColor: '#EF4040',
    transitionIn: 'bounceInDown',
    transitionOut: 'fadeOutUp',
    theme: 'dark',
    closeOnClick: true,
  });
}

function handleError(error) {
  console.error('Fetch error:', error.message);
}
