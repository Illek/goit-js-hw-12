import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { loadMoreBtn } from '../main';

const authKey = '44303353-9b630a8fdc8cdbe3ae770ff69';
const perPage = 15;
let page = 1;
let currentSearchValue = '';

export async function fetchImages(searchValue) {
  page = 1;
  currentSearchValue = searchValue;
  clearImages();

  showLoader();
  hideLoadMoreBtn();

  const searchParams = createSearchParams(searchValue, page);
  const URL = createUrl(searchParams);

  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    showToast(error.message, 'search-error', '#EF4040');
  } finally {
    hideLoader();
  }
}

export async function loadMore() {
  if (!currentSearchValue) return;

  page += 1;
  const searchParams = createSearchParams(currentSearchValue, page);
  const URL = createUrl(searchParams);

  try {
    const response = await axios.get(URL);
    const { totalHits } = response.data;
    const totalPages = Math.ceil(totalHits / perPage);

    if (page > totalPages) {
      hideLoadMoreBtn();
      showEndOfResultsMessage();
      return;
    }

    return response.data;
  } catch (error) {
    showToast(error.message, 'load-more-error', '#EF4040');
  } finally {
    hideLoader();
  }
}

function clearImages() {
  const listOfImages = document.querySelector('#images');
  listOfImages.innerHTML = '';
}

function showLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
}

function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
}

function showLoadMoreBtn() {
  loadMoreBtn.style.display = 'block';
}

function hideLoadMoreBtn() {
  loadMoreBtn.style.display = 'none';
}

function createSearchParams(query, page) {
  return new URLSearchParams({
    key: authKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page,
  });
}

function createUrl(params) {
  return `https://pixabay.com/api/?${params}`;
}

function showEndOfResultsMessage() {
  iziToast.show({
    class: 'search-404',
    message: "We're sorry, but you've reached the end of search results.",
    position: 'topRight',
    backgroundColor: '#EF4040',
    transitionIn: 'bounceInDown',
    transitionOut: 'fadeOutUp',
    theme: 'dark',
    closeOnClick: true,
  });
}

function showToast(message, className, backgroundColor) {
  iziToast.show({
    class: className,
    message,
    position: 'topRight',
    backgroundColor,
    transitionIn: 'bounceInDown',
    transitionOut: 'fadeOutUp',
    theme: 'dark',
    closeOnClick: true,
  });
}
