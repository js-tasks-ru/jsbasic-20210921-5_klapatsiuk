function hideSelf() {
  let button = document.getElementsByClassName('hide-self-button')[0];
  button.addEventListener('click', button.setAttribute('hidden', true));
}
