function toggleText() {
  const button = document.getElementsByClassName('toggle-text-button')[0];
  const div = document.getElementById('text');
  button.addEventListener('click', function() {
    div.toggleAttribute('hidden');
  });
}
