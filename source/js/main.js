import './mobile-menu.min.js';
import {buildMap} from './map.min.js';

const pageBody = document.querySelector('.page__body');
pageBody.classList.remove('js-exception');

buildMap();
