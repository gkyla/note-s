import { setLocalStorageAndRender } from './data/storage.js';
import { submitNoteData } from './utilities/form-handle.js';
import './component/add-note.js';

// Set Local Storage & Render Data
setLocalStorageAndRender();

const form = document.querySelector('form');
form.addEventListener('submit', submitNoteData);
