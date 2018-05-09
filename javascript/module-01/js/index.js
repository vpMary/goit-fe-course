'use strict';

const TOUR_TABA = 6;
const TOUR_SHARM = 15;
const TOUR_HURGADA = 25;

const tourSelection = Number(prompt('Введите число необходимых мест!', ''));
console.log(tourSelection);
const isValidNumber = !Number.isNaN(tourSelection) && tourSelection > 0;

if (isValidNumber) {

  if (tourSelection <= TOUR_TABA) {
    let userPlaces = confirm(
      'Есть место в группе Taba! Вы согласны быть в этой группе?',
    );

    if (userPlaces) {
      let numberOfRemainingPlaces = TOUR_TABA - tourSelection;
      console.log(numberOfRemainingPlaces);
      alert('Приятного путешествия в группе Taba');
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  } else if (tourSelection <= TOUR_SHARM) {
    let userPlaces = confirm(
      'Есть место в группе Sharm! Вы согласны быть в этой группе?',
    );

    if (userPlaces) {
      let numberOfRemainingPlaces = TOUR_SHARM - tourSelection;
      console.log(numberOfRemainingPlaces);
      alert('Приятного путешествия в группе Sharm');
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  } else if (tourSelection <= TOUR_HURGADA) {
    let userPlaces = confirm(
      'Есть место в группе Hurgada! Вы согласны быть в этой группе?',
    );

    if (userPlaces) {
      let numberOfRemainingPlaces = TOUR_HURGADA - tourSelection;
      console.log(numberOfRemainingPlaces);
      alert('Приятного путешествия в группе Hurgada');
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  } else if (tourSelection > 25) {
    alert('Извините, мест нет.');
  } else {
    alert('Ошибка ввода');
  }
}
