import SlimSelect from 'slim-select';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchBreeds, fetchCatByBreed } from './js/api.js';

const selectEl = document.querySelector("#selectElement");
const breedDetailsEl = document.querySelector(".content");
const loader = document.querySelector('.loader');

function showError(message) {
  iziToast.show({
    title: 'Error',
    message: `❌ Oops! ${message}`,
    position: 'topRight',
    color: 'red',
  });
}

function showLoader() {
  loader.style.display = "flex";
}

function hideLoader() {
  loader.style.display = "none";
}

async function initializeSelect() {
  showLoader();
  try {
    const data = await fetchBreeds();

    const options = data.map((breed) => ({ text: breed.name, value: breed.id }));

    const select = new SlimSelect({
      select: '#selectElement',
    });

    hideLoader();
    select.setData([{ placeholder: true, text: '' }, ...options]);
    selectEl.addEventListener('change', handleBreedSelect);
  } catch (error) {
    showError(error.message);
  }
}

async function handleBreedSelect() {
  showLoader();
  breedDetailsEl.innerHTML = ""
  try {
    const data = await fetchCatByBreed(selectEl.value);

    if (!data[0].breeds.length) {
      throw new Error("Something went wrong");
    }

    hideLoader();
    createBreedDetailsMarkup(data);
  } catch (error) {
    showError(error.message);
  }
}

function createBreedDetailsMarkup(data) {
  const img = data[0].url
  const { name, description, temperament, origin, country_code } = data[0].breeds[0]

  breedDetailsEl.innerHTML = `
    <div class="content__wrapper">
      <img class="content__img" src="${img}" alt="${name}"/>
      <div class="content__info">
        <h2 class="info__title">${name}</h2>
        <p><b class="info__text">Description:</b> ${description}</p>
        <p><b class="info__text">Temperament:</b> ${temperament}</p>
        <p><b class="info__text">Country:</b> ${origin}</p>
        <img class="info__flag" src="https://flagsapi.com/${country_code}/shiny/64.png" alt="Country code"> 
      </div>
    </div>
  `;
}

initializeSelect();
