let open = false;

const accorditionElement = document.querySelector('.accordition__button');
const contentElement = document.querySelector('.accordition__panel');
const iconElement = document.querySelector('.accordition__icon');

accorditionElement.addEventListener('click', () => {
  if (!open) {
    contentElement.classList.add('accordition__panel_opened');
    iconElement.classList.add('accordition__icon_rotated');
  } else {
    contentElement.classList.remove('accordition__panel_opened');
    iconElement.classList.remove('accordition__icon_rotated');
  }

  open = !open;
});
