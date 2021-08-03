const switchThemeButton = document.querySelector('.switch-theme');
const page = document.querySelector('.page');

switchThemeButton.addEventListener('click', () => {
  if (page.classList.contains('page_theme_light')) {
    page.classList.remove('page_theme_light');
    page.classList.add('page_theme_dark');
  } else {
    page.classList.remove('page_theme_dark');
    page.classList.add('page_theme_light');
  }
})
