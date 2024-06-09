import fetchImages from './js/pixabay-api';

const form = document.querySelector('.form');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const inputValue = getInputValue(event);
  if (!inputValue) return;
  fetchImages(inputValue);
  form.reset();
}

function getInputValue(event) {
  return event.currentTarget.elements.search.value.trim();
}
