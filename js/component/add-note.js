class AddNote extends HTMLElement {
   connectedCallback() {
      this.render();
   }

   render() {
      this.innerHTML = `
        <div class="box form-create">
        <button class="close-add-note" id="close-add-note">X</button>
            <form>
            <div class="title-create">
                <label for="title">Title</label>
                <input type="text" class="front-add-input" id="title" placeholder="Go to Concert" required/>
            </div>
            <div class="note-create">
                <label for="note">Note</label>
                <textarea
                    name="note"
                    class="front-add-input"
                    id="note"
                    cols="20"
                    rows="12"
                    placeholder="I'll wake up earlier tomorrow 😁"
                    required
                ></textarea>
            </div>
            <input type="submit" class="submit-btn" value="Add Note" />
            </form>
        </div>
        `;
   }
}

customElements.define('add-note', AddNote);
