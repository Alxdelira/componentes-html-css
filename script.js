const modeSwitch = document.getElementById('mode-switch');

function toggleDarkMode() {
  if (modeSwitch.checked) {
    // Ativar o modo dark
    document.body.classList.add('dark-mode');
  } else {
    // Desativar o modo dark
    document.body.classList.remove('dark-mode');
  }
}

modeSwitch.addEventListener('change', toggleDarkMode);
