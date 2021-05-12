let mainNav;

window.onload = function() {
  mainNav = document.querySelector('nav ul');
  document.querySelector('.today').innerHTML = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  document.querySelector('.ham').addEventListener('click', () => {
    mainNav.classList.toggle('block');
  });
}

window.onresize = () => {
  if (window.innerWidth > 760) {
    mainNav.classList.remove('block');
  }
}
