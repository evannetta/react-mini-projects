import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import { useState } from 'react';
import OptionSelect from './components/OptionSelect';

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure you want to delete this note?');
    if (confirm) {
      setNotes(notes.filter((note) => note.id != id));
    }
  };

  return (
    <>
      <nav className='w-full px-8 py-4 mb-8 bg-white shadow-md text-purple-800 flex flex-row justify-between items-center '>
        <h2 className='text-lg font-bold'>Hi, here are your notes</h2>

        <div className='flex  items-center gap-10'>
          <OptionSelect
            name={'Category'}
            options={['All notes', 'Work', 'Personal', 'Ideas']}
          />
          <OptionSelect
            name={'Sort'}
            options={['Date', 'Title']}
          />
        </div>
      </nav>
      <AddNote
        notes={notes}
        setNotes={setNotes}
      />
      <NoteList
        notes={notes}
        deleteNote={handleDelete}
      />
    </>
  );
};

export default App;
