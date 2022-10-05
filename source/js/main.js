import {buildSwiper} from './swiper.min.js';
import {buildMap} from './map.min.js';

const pageBody = document.querySelector('.page__body');
const navigation = document.querySelector('.navigation');
const navigationToggle = navigation.querySelector('.navigation__toggle');

pageBody.classList.remove('js-exception');

navigationToggle.addEventListener('click', () => {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
    navigation.classList.add('navigation--opened');
  } else {
    navigation.classList.add('navigation--closed');
    navigation.classList.remove('navigation--opened');
  }
});

buildSwiper();
buildMap();
