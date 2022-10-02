const navigation = document.querySelector('.navigation');
const navigationToggle = navigation.querySelector('.navigation__toggle');

const onNavigationToggleClick = () => {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
    navigation.classList.add('navigation--opened');
  } else {
    navigation.classList.add('navigation--closed');
    navigation.classList.remove('navigation--opened');
  }
}

navigationToggle.addEventListener('click', onNavigationToggleClick);
