# Simple Note Taking App

## Objective
Develop a simplified web application for taking notes using local storage for data persistence. This application showcases front-end development skills including CRUD operations, pagination, and responsive design.

## Features
- **Create:** Add new notes via a form.
- **Read:** Fetch and display notes from local storage.
- **Update:** Modify existing notes.
- **Delete:** Remove notes permanently.
- **Pagination:** Display 10 notes per page.
- **Search:** Filter notes by title or content.
- **Timestamps:** Record and display creation or last modification time for each note.

## Technical Requirements
- **Front-End Framework/Library:** React.js.
- **UI Requirements:** User-friendly interface, real-time feedback, responsive design.
- **Data Handling:** Uses browser's local storage to handle notes as an array of objects (id, title, content, timestamp).

## User Interface Design
- **List View:** Displays paginated notes with options to edit or delete, search bar, and a button to add new notes.
- **Note Item:** Displays title, brief content excerpt, and timestamp.
- **Note Form:** A modal or dedicated page for adding/editing note details.

## Approach
1. **Component Structure:**
   - Created a main `Notes` component to manage the state and logic of the application.
   - Used separate components for the note list (`NoteList`), note item (`NoteItem`), note form (`AddNote`), and header (`Header`) to enhance modularity and maintainability.
2. **State Management:**
   - Utilized React's `useState` and `useEffect` hooks for managing the notes' state and synchronizing with local storage.
   - Implemented pagination logic to handle the display of notes in sets of 10.
3. **CRUD Operations:**
   - `AddNote.jsx`: Integrated form handling for creating and editing notes, ensuring form validation and real-time feedback.
   - Developed functions for reading from and writing to local storage, updating the UI accordingly.
4. **Search Functionality:**
   - Added a search bar component (`Header.jsx`) to filter notes based on title or content, updating the displayed notes dynamically.
5. **Responsive Design:**
   - Ensured the application is responsive and user-friendly across different devices using CSS media queries and responsive design principles.

## Deployment
- Deployed on Netlify.

## Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Puneeth K9/Note-Making.git
   cd notes
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Live Demo
Check out the live demo [here](https://66a687f9975f4c6651977c28--notesadder.netlify.app/)
