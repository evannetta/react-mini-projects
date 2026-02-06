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
    <div className='min-w-sm'>
      <nav className='relative w-full px-2 md:px-4 md:py-4 pb-8 pt-4 mb-10 bg-white shadow-md text-purple-800 flex md:flex-row flex-col gap-4 justify-between items-center'>
        <h2 className='text-m md:text-lg font-bold'>Hi, here are your notes</h2>

        <div className='flex  items-center md:gap-2 gap-5'>
          <OptionSelect
            name={'Category'}
            options={['All notes', 'Work', 'Personal', 'Ideas']}
          />
          <OptionSelect
            name={'Sort'}
            options={['Date', 'Title']}
          />
        </div>
        <AddNote
          notes={notes}
          setNotes={setNotes}
        />
      </nav>
      <NoteList
        notes={notes}
        deleteNote={handleDelete}
      />
    </div>
  );
};

export default App;
