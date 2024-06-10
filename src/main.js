import { fetchImages, loadMore } from './js/pixabay-api';
import createMarkup from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
export const loadMoreBtn = document.querySelector('.load-more-btn');
const loader = document.querySelector('.loader');
let currentKeyword = '';

form.addEventListener('submit', async e => {
  e.preventDefault();
  loader.style.display = 'block';

  const inputValue = e.currentTarget.elements.search.value.trim();
  if (!inputValue) {
    loader.style.display = 'none';
    return;
  }

  currentKeyword = inputValue;
  try {
    const data = await fetchImages(inputValue);
    handleFetchResults(data);
  } catch (error) {
    handleError(error);
  } finally {
    form.reset();
    loader.style.display = 'none';
  }
});

loadMoreBtn.addEventListener('click', async () => {
  loader.style.display = 'block';
  loadMoreBtn.style.display = 'none';

  try {
    const data = await loadMore();
    handleLoadMoreResults(data);
  } catch (error) {
    handleError(error);
  } finally {
    loader.style.display = 'none';
  }
});

function handleFetchResults(data) {
  const images = document.querySelector('#images');

  if (data.total === 0) {
    images.innerHTML = '';
    showToast(
      'Sorry, there are no images matching your search query. Please, try again!',
      'search-404',
      '#EF4040'
    );
    loadMoreBtn.style.display = 'none';
    return;
  }

  createMarkup(data);

  // Check if the number of images is less than 15
  if (data.hits.length < 15) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'block';
  }
}

function handleLoadMoreResults(data) {
  if (!data) {
    return;
  }

  const card = document.querySelector('.images-image');
  const cardHeight = card.getBoundingClientRect().height;

  createMarkup(data);
  window.scrollBy(0, cardHeight * 2);
  loadMoreBtn.style.display = 'block';
}

function handleError(error) {
  showToast(error.message, 'load-error', '#EF4040');
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
