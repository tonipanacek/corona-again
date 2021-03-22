import { initBarba } from './init_barba.js';
import { handleRegisterFormSubmission } from './register_form.js';

// initBarba();
handleRegisterFormSubmission();

const videoDiv = document.querySelector('#video-experience');
const nav = document.querySelector('.navbar');
if (videoDiv) {
  nav.classList.add('hidden');
} else {
  nav.classList.remove('hidden');
}

