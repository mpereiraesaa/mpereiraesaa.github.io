window.onload = function() {
  const date = new Date();
  document.querySelector('.updated-at').innerHTML = `Last updated: ${date.toLocaleString()}`;
  document.querySelector('.copyright').innerHTML = `&copy; ${date.getFullYear()}`;
}