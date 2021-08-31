const infoButton = document.querySelector('.info');
const infoPopup = document.querySelector('.popup');
// const closeInfoPopupButton = infoPopup.querySelector('.popup__close');

console.dir(infoButton);

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

infoButton.addEventListener('click', (event) => {
  // console.log("Tada");
  // event.stopPropagation();
  openPopup(infoPopup);
});

// closeInfoPopupButton.addEventListener('click', () => {
//   closePopup(infoPopup);
// });

infoPopup.addEventListener('click', (event) => {
  // console.log('target:', event.target, 'currentTarget', event.currentTarget);
  // if (event.target.classList.contains('popup__close') || event.target.classList.contains('popup')) {
  //   // close button clicked or overlay clicked
  //   closePopup(infoPopup);
  // }

  const isCloseButtonClicked = event.target.classList.contains('popup__close');
  const isOverlayClicked = event.target.classList.contains('popup');

  if (isCloseButtonClicked || isOverlayClicked) {
    // close button clicked or overlay clicked
    closePopup(infoPopup);
  }

  // if (event.target.classList.contains('popup__close') || event.target === event.currentTarget) {
  //   // close button clicked or overlay clicked
  //   closePopup(infoPopup);
  // }
});

// function togglePopup(popup) {
//   popup.classList.toggle('popup_opened');
// }

// openPopup(infoPopup);
// togglePopup(infoPopup);
// closePopup(infoPopup);

// function doWorkout(level) {
//   pullup(5 * level);
//   pushup(5 * level);
// }
