import {
   CreateEmptyDataTemplate,
   createItemNote,
} from './template/template-creator.js';
import { modalHandler } from './utilities/modal-settings.js';
import { deleteHandler } from './utilities/remove-item.js';
const noteContainer = document.querySelector('.note-container');
const totalItem = document.querySelector('.total-item');

function render(noteData) {
   noteContainer.innerHTML = ''; // Reset Container First
   totalItem.innerHTML = `${noteData.length} Total Notes`;

   if (Object.values(noteData).length === 0) {
      // Set style to 1 column
      noteContainer.style.gridTemplateColumns = '1fr';
      noteContainer.innerHTML = CreateEmptyDataTemplate();
   } else {
      // Set to default (2 columns)
      noteContainer.style.gridTemplateColumns = '';
   }

   let currentIndex = 0;
   noteData.forEach((note) => {
      noteContainer.innerHTML += createItemNote(note, currentIndex);
      currentIndex++;
   });

   // When height <= 600px , rows will be 5

   // Call handler every render new note item
   modalHandler(noteData); // Handler for open,close modal
   deleteHandler(noteData); // Handler for delete item
}

export { render };
