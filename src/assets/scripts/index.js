import { initBarba } from './init_barba.js';
import { handleRegisterFormSubmission } from './register_form.js';
import { handleFeedbackForm } from './feedback_form.js';
import { handleWorkshopForm } from './workshop_form.js';
import { handleVimeo } from './init_vimeo.js';
import { toggleMobileMenu } from './mobile_menu.js';

// initBarba();
handleRegisterFormSubmission();
// initVimeo();
handleVimeo();
toggleMobileMenu();
handleFeedbackForm();
handleWorkshopForm();
