const words = ['Temanmu', 'Keluargamu', 'Kerabatmu', 'Kenalanmu'];
let wordIndex = 0;
let letterIndex = 0;
const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetweenWords = 1000;

const linemodif = document.querySelector('.linemodif-anim');

function type() {
  if (letterIndex < words[wordIndex].length) {
    linemodif.textContent = words[wordIndex].slice(0, ++letterIndex);
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenWords);
  }
}

function erase() {
  if (letterIndex > 0) {
    linemodif.textContent = words[wordIndex].slice(0, --letterIndex);
    setTimeout(erase, erasingSpeed);
  } else {
    wordIndex = (wordIndex + 1) % words.length; // Maju ke word berikutnya
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, delayBetweenWords);
});
