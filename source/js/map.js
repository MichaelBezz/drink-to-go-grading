const COORDINATE = {
  lat: 59.96831,
  lng: 30.31748
};

const LAYER_OPTION = {
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

const MAP_ZOOM = 17;

const MARKER_OPTION = {
  iconUrl: './img/map/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50]
};

const mapLeaflet = document.querySelector('.map__leaflet');
const mapImage = document.querySelector('.map__image');

const map = L.map(mapLeaflet);
const markerIcon = L.icon(MARKER_OPTION);

const createCustomPopup = () => /*html*/`
  <div class="popup">
    <img class="popup__logo" src="img/logo/drink-to-go-large.svg" width="170" height="36" alt="Логотип «Drink2Go».">
    <p class="popup__text">Ждем Вас ежедневно с 07:00 до 00:00</p>
  </div>
`;

const buildMap = () => {
  map
    .on('load', () => {
      mapImage.replaceWith(mapLeaflet);
    })
    .setView(COORDINATE, MAP_ZOOM);

  L.tileLayer(
    LAYER_OPTION.url,
    {attribution: LAYER_OPTION.attribution}
  ).addTo(map);

  L.marker(
  COORDINATE,
  {
    draggable: false,
    icon: markerIcon
  }
  ).addTo(map).bindPopup(createCustomPopup());;
}

export {buildMap};
