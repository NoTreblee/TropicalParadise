const nav = document.getElementById('nav');
const navBtn = document.getElementById('burgerBtn');
const allNavItems = document.querySelectorAll('.nav__item');
const handleNav = () => {
  nav.classList.toggle('nav--active');
  allNavItems.forEach((item) => {
    item.addEventListener('click', () => {
      nav.classList.remove('nav--active');
    });
  });
  handleNavItemsAnimation();
};
const handleNavItemsAnimation = () => {
  let delayTime = 1;
  allNavItems.forEach((item) => {
    item.classList.toggle('nav-item-animation');
    item.style.animationDelay = '.' + delayTime + 's';
    delayTime++;
  });
};
navBtn.addEventListener('click', handleNav);
