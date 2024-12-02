import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Fetch notes from db.json
  useEffect(() => {
    const fetchNotes = async () => {
      const response = await axios.get('http://localhost:5000/notes');
      setNotes(response.data);
    };
    fetchNotes();
  }, []);

  // Add a new note
  const addNote = async (text) => {
    const date = new Date();
    const newNote = {
      id: Date.now().toString(),
      text,
      date: date.toLocaleDateString(),
    };

    const response = await axios.post('http://localhost:5000/notes', newNote);
    setNotes([...notes, response.data]);

  };

  // Delete a note
  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:5000/notes/${id}`);
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />

        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}

          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          
        />

      </div>
    </div>
  );
};

export default App;
