# 🌟 **Full-stack Development**: Notes Management Application

**Full-stack Development** is a dynamic web application designed to efficiently manage notes. Built with **React.js**, it allows users to create, delete, and search notes seamlessly. With a modern **dark mode toggle** and a clean, user-friendly interface, this app ensures smooth note management for all users.

---

## 🔑 **Features & Functionality**

- ✍️ **Create Notes**: Add new notes with a **200-character** limit.
- ❌ **Delete Notes**: Easily remove any note.
- 🔍 **Search Notes**: Filter and search notes by text for quick access.
- 🌙 **Dark Mode Toggle**: Switch between light and dark modes for enhanced readability.
- 📱 **Responsive Design**: Optimized for all screen sizes and devices.

---

## 🧰 **Technology Stack**

- **Frontend**: React.js
- **State Management**: React Hooks (`useState`, `useEffect`)
- **HTTP Client**: Axios
- **Icons**: react-icons
- **Styling**: CSS

---

## 🛠 **Prerequisites**

Before starting, make sure you have the following:

- **Node.js** and **npm** installed on your machine.
- A **JSON server** (or similar backend) to handle note storage.

---

## 🚀 **Installation Instructions**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Neeharikavasadi/Full-stack-development.git
   cd Full-stack-development


2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the JSON server (assuming you have `db.json` set up for notes):
   ```bash
   json-server --watch db.json --port 5000
   ```

4. Start the React application:
   ```bash
   npm start
   ```

## 👨‍💻 Usage Guide
Once the application is running, you can:
- Add a note by typing in the textarea and clicking "Save".
- Delete a note by clicking the delete icon next to it.
- Use the search bar to filter notes by text.
- Toggle dark mode using the button in the header.

## 🌐API Documentation
The application interacts with a JSON server running locally. Below are the endpoints used:
- **GET /notes**: Fetch all notes.
- **POST /notes**: Create a new note. Requires a JSON body with the note's text.
- **DELETE /notes/:id**: Delete a note by its ID.

## 🤝Contributing Guidelines
Contributions are welcome! To contribute to this project:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request.


Thank you for checking out Full-stack Development! Happy coding!
